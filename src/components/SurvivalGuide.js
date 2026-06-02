import React, { useState } from "react";
import "./SurvivalGuide.css";

function SurvivalGuide() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const guidePdf = "/assets/guides/PERMIKATO E-BOOKLET 2025.pdf";
  const guidePages = Array.from(
    { length: 49 },
    (_, index) =>
      `/assets/guides/survival-guide-2025-pages/page-${String(index + 1).padStart(2, "0")}.png`
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 0));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, guidePages.length - 1));
  };

  const renderBookletViewer = (isFullscreen = false) => (
    <div className={isFullscreen ? "survival-booklet is-fullscreen" : "survival-booklet"}>
      <div className="survival-booklet-stage" aria-live="polite">
        <img
          src={guidePages[currentPage]}
          alt={`Preview of the PERMIKATO Survival Guide 2025 page ${currentPage + 1}`}
          className="survival-pdf-preview"
          loading={currentPage === 0 ? "eager" : "lazy"}
        />
      </div>

      <div className="survival-booklet-controls">
        <div
          className="survival-booklet-progress"
          aria-hidden="true"
        >
          <span
            style={{
              width: `${((currentPage + 1) / guidePages.length) * 100}%`,
            }}
          />
        </div>

        <div className="survival-control-row">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={currentPage === 0}
            aria-label="Previous PDF page"
          >
            ‹
          </button>
          <span className="survival-page-count">
            {currentPage + 1} / {guidePages.length}
          </span>
          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === guidePages.length - 1}
            aria-label="Next PDF page"
          >
            ›
          </button>

          <button
            type="button"
            className="survival-fullscreen-button"
            onClick={() => setIsViewerOpen((open) => !open)}
            aria-label={isFullscreen ? "Close fullscreen booklet" : "Open fullscreen booklet"}
          >
            {isFullscreen ? "×" : "⛶"}
          </button>
        </div>
      </div>
    </div>
  );

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
              href={guidePdf}
              className="survival-download-button"
              download
            >
              Download PDF
            </a>
          </div>

          <div className="survival-pdf-wrap">
            {renderBookletViewer()}
          </div>
        </div>

        {isViewerOpen && (
          <div className="survival-viewer-modal" role="dialog" aria-modal="true">
            {renderBookletViewer(true)}
          </div>
        )}

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
