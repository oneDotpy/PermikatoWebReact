import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './Execs.css';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRah_tCFZe8QB6HJ14l1K5qym0P4qADtwvtHHdzApUT49Tc8AioJUv7LohNFn6guL-G-QOcSWbyMVGV/pub?output=csv';

function Execs() {
  const [execData, setExecData] = useState({});
  const [selectedYear, setSelectedYear] = useState('');
  
  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (result) => {
        const grouped = result.data.reduce((acc, exec) => {
          if (!acc[exec.year]) acc[exec.year] = [];
          acc[exec.year].push(exec);
          return acc;
        }, {});
        setExecData(grouped);

        // Set default year to first available
        if (Object.keys(grouped).length > 0) {
          setSelectedYear(Object.keys(grouped)[0]);
        }
      }
    });
  }, []);

  const executives = execData[selectedYear] || [];

  return (
    <div className="execs-container">
      <h1 className="execs-title">Meet our execs!</h1>
      {selectedYear && (
        <h2 className="execs-subtitle">PERMIKATO {selectedYear}</h2>
      )}
      <div className="year-selector">
        <label>Select Year: </label>
        <select 
          value={selectedYear} 
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {Object.keys(execData).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="execs-grid-wrapper">
        <div className="execs-grid">
          {executives.map((exec, index) => (
            <div key={index} className="exec-card">
              <img 
                src={exec.imgSrc} 
                alt={exec.name} 
                className="exec-image" 
                loading="lazy"
              />
              <div className="exec-info">
                <h3>{exec.name}</h3>
                <p>{exec.title}</p>
                <p>{exec.university}</p>
                <p><em>{exec.program}</em></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Execs;
