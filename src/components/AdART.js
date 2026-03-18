import React from "react";
import "./AdART.css";

function AdART() {
  return (
    <section className="adart-page">
      <div className="adart-shell">
        <div className="adart-hero">
          <span className="adart-eyebrow">Governance & Constitution</span>
          <h1 className="adart-title">
            PERMIKA Toronto&apos;s <span>AD/ART</span>
          </h1>
          <p className="adart-description">
            PERMIKATO&apos;s AD/ART (Anggaran Dasar / Anggaran Rumah Tangga)
            serves as the organization&apos;s constitution and bylaws. It
            outlines our mission, structure, membership, and operational
            procedures, ensuring that activities, elections, and events are
            conducted fairly and transparently in line with our values as an
            Indonesian student community in Toronto.
          </p>
        </div>

        <div className="adart-main-card">
          <div className="adart-card-copy">
            <span className="adart-chip">Current Edition</span>
            <h2>AD/ART 2024/2025</h2>
            <p>
              View the latest official AD/ART document below. This serves as
              the main reference for the organization&apos;s governance and
              membership framework.
            </p>
          </div>

          <div className="adart-pdf-wrap">
            <embed
              src="/assets/guides/comingsoon.pdf"
              type="application/pdf"
              className="adart-pdf-viewer"
            />
          </div>
        </div>

        <div className="adart-past-card">
          <div className="adart-past-header">
            <span className="adart-chip">Archive</span>
            <h2>Past Editions</h2>
            <p>
              Previous AD/ART editions can be listed here for reference and
              historical documentation.
            </p>
          </div>

          <div className="adart-empty-state">
            <div className="adart-empty-icon">•</div>
            <div>
              <h3>More editions coming soon</h3>
              <p>
                Archived AD/ART documents for previous terms will appear here
                once they are uploaded.
              </p>
            </div>
          </div>

          {/*
          <div className="adart-edition-list">
            <div className="adart-edition-item">
              <div>
                <h4>AD/ART 2023/2024</h4>
                <p>Previous organizational constitution and bylaws.</p>
              </div>
              <a
                href="/assets/guides/draft_survival_guide_2024.pdf"
                className="adart-secondary-button"
                download
              >
                Download
              </a>
            </div>

            <div className="adart-edition-item">
              <div>
                <h4>AD/ART 2022/2023</h4>
                <p>Archived version for historical reference.</p>
              </div>
              <a
                href="/assets/guides/draft_survival_guide_2023.pdf"
                className="adart-secondary-button"
                download
              >
                Download
              </a>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}

export default AdART;