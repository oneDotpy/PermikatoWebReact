import "./SurvivalGuide.css";

const GUIDE_PDF = "/assets/guides/PERMIKATO%20E-BOOKLET%202025.pdf";
const GUIDE_PREVIEW = "/assets/guides/PERMIKATO-E-BOOKLET-2025-preview.png";

function SurvivalGuide() {
  return (
    <section className="survival-page">
      <div className="survival-shell">
        <header className="survival-hero">
          <span className="survival-eyebrow">Student Resource</span>
          <h1 className="survival-title">
            Survival <span>Guide</span>
          </h1>
          <p className="survival-description">
            Practical information and resources for Indonesian students
            settling into life in Toronto.
          </p>
        </header>

        <div className="survival-main-card">
          <div className="survival-copy">
            <span className="survival-chip">Latest Edition</span>
            <h2>Survival Guide 2025</h2>
            <p>Open the full guide in your browser or download it for offline access.</p>
            <div className="survival-actions">
              <a
                href={GUIDE_PDF}
                className="survival-download-button"
                target="_blank"
                rel="noreferrer"
              >
                Open PDF
              </a>
              <a href={GUIDE_PDF} className="survival-secondary-button" download>
                Download
              </a>
            </div>
          </div>

          <div className="survival-pdf-wrap">
            <img
              src={GUIDE_PREVIEW}
              alt="Cover of the PERMIKATO Survival Guide 2025"
              className="survival-preview"
              loading="lazy"
            />
          </div>
        </div>

        <section className="survival-archive-card">
          <span className="survival-chip">Archive</span>
          <h2>Past Editions</h2>
          <p>Older survival guides will appear here when they are available.</p>
        </section>
      </div>
    </section>
  );
}

export default SurvivalGuide;
