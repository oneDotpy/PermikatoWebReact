import { useCallback, useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import "./Executives.css";
import { DIVISION_RULES, EXECUTIVES_SHEET_URL } from "./data";
import { getOptimizedImageSrc, restoreOriginalImage } from "../../utils/images";

const normalize = (value) => (value ?? "").toString().trim();
const slugify = (value) =>
  normalize(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function Executives() {
  const [byYear, setByYear] = useState({});
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    Papa.parse(EXECUTIVES_SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const rows = (result.data || [])
          .map((row) => ({
            name: normalize(row.name),
            title: normalize(row.title),
            university: normalize(row.university),
            program: normalize(row.program),
            imgSrc: normalize(row.imgSrc || row.img || row.image),
            year: normalize(row.year),
          }))
          .filter((person) => person.name && person.title && person.year);
        const grouped = rows.reduce((groups, person) => {
          (groups[person.year] ||= []).push(person);
          return groups;
        }, {});
        const availableYears = Object.keys(grouped).sort((a, b) =>
          b.localeCompare(a)
        );

        setByYear(grouped);
        setYears(availableYears);
        setSelectedYear((year) => year || availableYears[0] || "");
      },
      error: (error) => console.error("Failed to load executives CSV:", error),
    });
  }, []);

  const divisions = useMemo(() => {
    const rules = DIVISION_RULES[selectedYear] || [];
    const people = byYear[selectedYear] || [];

    return rules
      .map(({ division, titles }) => ({
        division,
        id: slugify(division),
        members: people
          .filter((person) => titles.includes(person.title))
          .sort((a, b) => {
            const titleOrder = titles.indexOf(a.title) - titles.indexOf(b.title);
            return titleOrder || a.name.localeCompare(b.name);
          }),
      }))
      .filter(({ members }) => members.length);
  }, [selectedYear, byYear]);

  const scrollToDivision = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="execs-container">
      <h1 className="execs-title">Meet Our Executives</h1>
      {selectedYear && (
        <p className="execs-subtitle">PERMIKATO Executives {selectedYear}</p>
      )}

      <div className="year-selector">
        <label htmlFor="year">Select Year:</label>
        <select
          id="year"
          value={selectedYear}
          onChange={(event) => setSelectedYear(event.target.value)}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

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

      {divisions.map(({ division, id, members }) => (
        <section key={id} id={id} className="division-section">
          <div className="division-title-wrap">
            <h2 className="division-title">{division}</h2>
          </div>
          <div className="execs-grid-wrapper">
            <div className="execs-grid">
              {members.map((member) => (
                <article className="exec-card" key={member.name}>
                  {member.imgSrc && (
                    <img
                      className="exec-image"
                      src={getOptimizedImageSrc(member.imgSrc)}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      onError={(event) => restoreOriginalImage(event, member.imgSrc)}
                    />
                  )}
                  <div className="exec-info">
                    <h3>{member.name}</h3>
                    <p>{member.title}</p>
                    {member.university && <p>{member.university}</p>}
                    {member.program && (
                      <p>
                        <em>{member.program}</em>
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Executives;
