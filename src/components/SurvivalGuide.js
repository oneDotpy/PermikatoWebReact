import React from "react";
import "./SurvivalGuide.css";

function SurvivalGuide() {
  return (
    <div className="survival-guide-container">
      <h1 className="title">Survival Guide</h1>
      <p className="description">
        A helpful guide for Indonesian students navigating life in Toronto.
      </p>

      <div className="pdf-section">
        <h2>Survival Guide 2025</h2>
        <embed
          src="/assets/guides/PERMIKATO E-BOOKLET 2025.pdf"
          type="application/pdf"
          className="pdf-viewer"
        />
        <a
          href="/assets/guides/PERMIKATO E-BOOKLET 2025.pdf"
          className="download-button"
          download
        >
          Download PDF
        </a>
      </div>

      <div className="pdf-section past-editions">
        <h2>Past Editions</h2>
        {/* <div className="past-guide">
          <p>Survival Guide 2024</p>
          <a
            href="/assets/guides/draft_survival_guide_2024.pdf"
            className="download-button"
            download
          >
            Download
          </a>
        </div>
        <div className="past-guide">
          <p>Survival Guide 2023</p>
          <a
            href="/assets/guides/draft_survival_guide_2023.pdf"
            className="download-button"
            download
          >
            Download
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default SurvivalGuide;
