import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Papa from 'papaparse';
import './Execs.css';

/* Your exact Google Sheets CSV */
const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRah_tCFZe8QB6HJ14l1K5qym0P4qADtwvtHHdzApUT49Tc8AioJUv7LohNFn6guL-G-QOcSWbyMVGV/pub?output=csv';

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

/* ------------------------ Division Rules -------------------------- */
/* EXACTLY as requested */

const DIVISION_RULES = {
  '2024/2025': [
    {
      division: 'Core Executive',
      titles: ['President', 'Vice President', 'Secretary'],
    },
    {
      division: 'External Affairs',
      titles: ['Head of External Affairs', 'External Affairs Associate'],
    },
    {
      division: 'Education and Student Development',
      titles: [
        'Head of Education and Student Development',
        'Education and Student Development Associate',
      ],
    },
    {
      division: 'Finance',
      titles: ['Head of Finance', 'Finance Associate'],
    },
    {
      division: 'IT, Media, and Publication',
      titles: [
        'Head of IT, Media, and Publication',
        'IT Associate',
        'Media Associate',
      ],
    },
    {
      division: 'Research and Strategic Organization',
      titles: [
        'Head of Research and Strategic Organization',
        'Research and Strategic Organization Associate',
      ],
    },
    {
      division: 'Student Engagement',
      titles: [
        'Head of Student Engagement',
        'Student Engagement Associate',
      ],
    },
  ],
  '2025/2026': [
    {
      division: 'Core Executive',
      titles: ['President', 'Vice President'],
    },
    {
      division: 'Events',
      titles: ['Head of Event', 'Event Associate'],
    },
    {
      division: 'External Affairs',
      titles: ['Head of External Affairs', 'External Affairs Associate'],
    },
    {
      division: 'Finance',
      titles: ['Head of Finance', 'Finance Associate'],
    },
    {
      division: 'IT, Media, and Publication',
      titles: [
        'Head of IT, Media, and Publication',
        'Media Strategies Associate',
        'Graphic Design Associate',
        'Video Editor Associate',
        'Photo & Video Associate',
        'Web Development Associate',
      ],
    },
    {
      division: 'Research, Strategy, and Operations',
      titles: [
        'Head of Research, Strategy, and Operations',
        'Research Strategy, and Operations Associate',
      ],
    },
  ],
};

/* Create a safe id from division name for anchors */
const slug = (s) =>
  norm(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/* --------------------------- Component ---------------------------- */

function Execs() {
  const [byYear, setByYear] = useState({});
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');

  /* Fetch and parse CSV (unchanged approach) */
  useEffect(() => {
    Papa.parse(SHEET_URL, {
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
      <h1 className="execs-title">Meet Our Committees</h1>
      {selectedYear && (
        <p className="execs-subtitle">PERMIKATO Committee {selectedYear}</p>
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
                      src={m.imgSrc}
                      alt={m.name}
                      loading="lazy"
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

export default Execs;
