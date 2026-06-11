import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Papa from 'papaparse';
import './Executives.css';
import { DIVISION_RULES, EXECUTIVES_SHEET_URL } from '../data/executives';
import { getOptimizedImageSrc, restoreOriginalImage } from '../../../utils/images';

/* ----------------------------- Helpers ----------------------------- */

const norm = (s) => (s ?? '').toString().trim();
const sortYearsDesc = (a, b) => {
  const [ay] = a.split('/').map(Number);
  const [by] = b.split('/').map(Number);
  return by - ay;
};
const makeTitleOrder = (titles) => {
  const m = new Map();
  titles.forEach((t, i) => m.set(norm(t).toLowerCase(), i));
  return (title) => (m.has(norm(title).toLowerCase()) ? m.get(norm(title).toLowerCase()) : Number.MAX_SAFE_INTEGER);
};

/* Create a safe id from division name for anchors */
const slug = (s) =>
  norm(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/* --------------------------- Component ---------------------------- */

function Executives() {
  const [byYear, setByYear] = useState({});
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  /* Fetch and parse CSV (unchanged approach) */
  useEffect(() => {
    Papa.parse(EXECUTIVES_SHEET_URL, {
      download: true,
      header: true,
      complete: (result) => {
        const rows = (result.data || [])
          .map((r) => ({
            name: norm(r.name),
            title: norm(r.title),
            university: norm(r.university),
            program: norm(r.program),
            imgSrc: norm(r.imgSrc || r.img || r.image),
            year: norm(r.year),
          }))
          .filter((x) => x.name && x.title && x.year);

        const grouped = rows.reduce((acc, x) => {
          (acc[x.year] ||= []).push(x);
          return acc;
        }, {});
        const allYears = Object.keys(grouped).sort(sortYearsDesc);

        setByYear(grouped);
        setYears(allYears);
        setSelectedYear((prev) => prev || allYears[0] || '');
      },
      error: (err) => console.error('Error parsing CSV:', err),
    });
  }, []);

  /* Build division -> members according to the selected year's rules */
  const divisions = useMemo(() => {
    if (!selectedYear) return [];
    const rules = DIVISION_RULES[selectedYear] || [];
    const people = byYear[selectedYear] || [];

    // Map title -> division
    const titleToDivision = new Map();
    rules.forEach(({ division, titles }) =>
      titles.forEach((t) => titleToDivision.set(norm(t).toLowerCase(), division))
    );

    // Prepare buckets in configured order
    const buckets = rules.map(({ division, titles }) => ({
      division,
      id: slug(division),
      titles,
      members: [],
    }));

    // Assign people to buckets if their title matches
    people.forEach((p) => {
      const d = titleToDivision.get(norm(p.title).toLowerCase());
      if (!d) return;
      const bucket = buckets.find((b) => b.division === d);
      if (bucket) bucket.members.push(p);
    });

    // Sort members inside each bucket based on title order, then by name
    buckets.forEach((b) => {
      const idx = makeTitleOrder(b.titles);
      b.members.sort((a, c) => {
        const ia = idx(a.title);
        const ic = idx(c.title);
        if (ia !== ic) return ia - ic;
        return a.name.localeCompare(c.name);
      });
    });

    return buckets.filter((b) => b.members.length > 0);
  }, [selectedYear, byYear]);

  /* Scroll handler for the division chips */
  const scrollToDivision = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="execs-container">
      {/* Main heading and subtitle */}
      <h1 className="execs-title">Meet Our Executives</h1>
      {selectedYear && (
        <p className="execs-subtitle">PERMIKATO Executives {selectedYear}</p>
      )}

      {/* Year selector */}
      <div className="year-selector">
        <label htmlFor="year">Select Year:</label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {/* Division chips (buttons) */}
      {divisions.length > 0 && (
        <div className="division-nav" role="navigation" aria-label="Divisions">
          {divisions.map(({ division, id }) => (
            <button
              key={id}
              type="button"
              className="division-chip"
              onClick={() => scrollToDivision(id)}
            >
              {division}
            </button>
          ))}
        </div>
      )}

      {/* Render each division as a section with an anchor id */}
      {divisions.map(({ division, id, members }) => (
        <section key={id} id={id} className="division-section">
          <div className="division-title-wrap">
            <h3 className="division-title">{division}</h3>
          </div>

          <div className="execs-grid-wrapper">
            <div className="execs-grid">
              {members.map((m, i) => (
                <div className="exec-card" key={`${m.name}-${i}`}>
                  {m.imgSrc ? (
                    <img
                      className="exec-image"
                      src={getOptimizedImageSrc(m.imgSrc)}
                      alt={m.name}
                      loading="lazy"
                      decoding="async"
                      onError={(event) => restoreOriginalImage(event, m.imgSrc)}
                    />
                  ) : null}
                  <div className="exec-info">
                    <h3>{m.name}</h3>
                    <p>{m.title}</p>
                    {m.university ? <p>{m.university}</p> : null}
                    {m.program ? (
                      <p>
                        <em>{m.program}</em>
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Executives;
