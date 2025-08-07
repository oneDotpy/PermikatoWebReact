import React from "react";
import "./SurvivalGuide.css";

function AdART() {
  return (
    <div className="survival-guide-container">
      <h1 className="title">PERMIKA Toronto's AD/ART</h1>
      <p className="description">
        PERMIKATO's AD/ART (Anggaran Dasar/Anggaran Rumah Tangga) serves as the organization's constitution and bylaws. It defines our mission, structure, membership, and operational procedures. Ensuring that all activities, elections, and events are conducted fairly and transparently in line with our values as an Indonesian student community in Toronto.
      </p>


      <div className="pdf-section">
        <h2>AD/ART 2024/2025</h2>
        <embed
          src="/assets/guides/comingsoon.pdf"
          type="application/pdf"
          className="pdf-viewer"
        />
        {/* <a
          href="/assets/guides/PERMIKATO E-BOOKLET 2025.pdf"
          className="download-button"
          download
        >
          Download PDF
        </a> */}
      </div>

      <div className="pdf-section past-editions">
        <h2>Past Editions</h2>
        {/* <div className="past-guide">
          <p>AD/ART 2023/2024</p>
          <a
            href="/assets/guides/draft_survival_guide_2024.pdf"
            className="download-button"
            download
          >
            Download
          </a>
        </div>
        <div className="past-guide">
          <p>AD/ART 2022/2023</p>
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

export default AdART;
