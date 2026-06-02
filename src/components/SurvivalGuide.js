import React from "react";
import "./SurvivalGuide.css";

function SurvivalGuide() {
  return (
    <section className="survival-page">
      <div className="survival-shell">
        <div className="survival-hero">
          <span className="survival-eyebrow">Student Resource</span>
          <h1 className="survival-title">
            Survival <span>Guide</span>
          </h1>
          <p className="survival-description">
            A helpful guide for Indonesian students navigating life in Toronto.
            Discover practical information, useful tips, and important
            resources to help you settle in more confidently.
          </p>
        </div>

        <div className="survival-main-card">
          <div className="survival-copy">
            <span className="survival-chip">Latest Edition</span>
            <h2>Survival Guide 2025</h2>
            <p>
              View the latest PERMIKATO booklet below and download it anytime
              for easy access.
            </p>

            <a
              href="/assets/guides/PERMIKATO E-BOOKLET 2025.pdf"
              className="survival-download-button"
              download
            >
              Download PDF
            </a>
          </div>

          <div className="survival-pdf-wrap">
            <embed
              src="/assets/guides/PERMIKATO E-BOOKLET 2025.pdf"
              type="application/pdf"
              className="survival-pdf-viewer"
            />
          </div>
        </div>

        <div className="survival-archive-card">
          <div className="survival-archive-header">
            <span className="survival-chip">Archive</span>
            <h2>Past Editions</h2>
            <p>
              Previous editions of the survival guide can be added here for
              reference and historical access.
            </p>
          </div>

          <div className="survival-empty-state">
            <div className="survival-empty-icon">•</div>
            <div>
              <h3>More Editions Coming Soon</h3>
              <p>
                Older survival guide editions will appear here once they are
                uploaded.
              </p>
            </div>
          </div>

          {/*
          <div className="survival-edition-list">
            <div className="survival-edition-item">
              <div>
                <h4>Survival Guide 2024</h4>
                <p>Previous student guide edition.</p>
              </div>
              <a
                href="/assets/guides/draft_survival_guide_2024.pdf"
                className="survival-secondary-button"
                download
              >
                Download
              </a>
            </div>

            <div className="survival-edition-item">
              <div>
                <h4>Survival Guide 2023</h4>
                <p>Archived edition for reference.</p>
              </div>
              <a
                href="/assets/guides/draft_survival_guide_2023.pdf"
                className="survival-secondary-button"
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

export default SurvivalGuide;
