import React, { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { eventContent, EVENTS_SHEET_URL } from "../features/home/data/events";
import { getOptimizedImageSrc, restoreOriginalImage } from "../utils/images";
import "./EventDetailPage.css";

function EventDetailPage() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    Papa.parse(EVENTS_SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setEvents((result.data || []).filter((event) => event?.title));
      },
    });
  }, []);

  const event = useMemo(() => {
    if (location.state?.event) {
      return location.state.event;
    }

    return events.find((item) => {
      const extra = eventContent[item.title];
      return extra?.slug === slug;
    });
  }, [events, location.state, slug]);

  const content = event ? eventContent[event.title] : null;

  const handleBackToEvents = () => {
    navigate("/", { state: { scrollTo: "events" } });
  };

  if (!event || !content) {
    return (
      <section className="event-detail-page">
        <div className="event-detail-shell">
          <button onClick={handleBackToEvents} className="event-detail-back button-reset">
            ← Back to Events
          </button>
          <h1>Event Not Found</h1>
          <p>This event page is not available yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="event-detail-page">
      <div className="event-detail-hero">
        <img
          src={getOptimizedImageSrc(event.image)}
          alt={event.title}
          className="event-detail-hero-image"
          decoding="async"
          fetchpriority="high"
          onError={(imageEvent) => restoreOriginalImage(imageEvent, event.image)}
        />
        <div className="event-detail-overlay" />
        <div className="event-detail-hero-content">
          <button
            onClick={handleBackToEvents}
            className="event-detail-back light button-reset"
          >
            ← Back to Events
          </button>
          <span className="event-detail-chip">{content.tag}</span>
          <h1>{event.title}</h1>
          <p>{content.shortDescription}</p>
        </div>
      </div>

      <div className="event-detail-shell">
        <div className="event-detail-grid">
          <article className="event-detail-article">
            {content.fullDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </article>

          <aside className="event-detail-sidebar">
            <div className="event-detail-card">
              <h3>About This Event</h3>
              <p>{content.shortDescription}</p>
            </div>

            {event.galleryLink && (
              <div className="event-detail-card">
                <h3>Gallery</h3>
                <a
                  href={event.galleryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="event-detail-button"
                >
                  View photo gallery
                </a>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}

export default EventDetailPage;
