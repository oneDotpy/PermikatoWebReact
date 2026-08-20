import { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import "./Events.css";
import { eventContent, EVENTS_SHEET_URL } from "./data";
import { getOptimizedImageSrc, restoreOriginalImage } from "../../utils/images";

function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Papa.parse(EVENTS_SHEET_URL, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const cleaned = (result.data || [])
          .filter((event) => event?.title)
          .map((event) => {
            const normalizedTitle = event.title?.replace(/\s+2024$/, "").trim();
            const extra =
              eventContent[event.title] || eventContent[normalizedTitle] || {};

            return {
              ...event,
              slug: extra.slug || null,
              description:
                event.description?.trim() ||
                extra.shortDescription ||
                "More details coming soon.",
            };
          });

        setEvents(cleaned);
      },
      error: (error) => console.error("Failed to load events CSV:", error),
    });
  }, []);

  const featuredEvent = useMemo(() => events[0] || null, [events]);

  const handleEventClick = (event) => {
    if (event.slug) {
      navigate(`/events/${event.slug}`, { state: { event } });
    } else if (event.galleryLink) {
      window.open(event.galleryLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="events" className="events-section">
      <div className="events-shell">
        <div className="events-header">
          <div>
            <span className="events-eyebrow">What We Do</span>
            <h2>Events That Bring Indonesian Students Together in Toronto</h2>
          </div>
          <p>
            From welcoming new students and building friendships to exploring
            ideas, culture, and community, our programs are designed to feel
            warm, memorable, and meaningful.
          </p>
        </div>

        {featuredEvent && (
          <article className="events-featured-card">
            <div className="events-featured-copy">
              <span className="events-chip">Featured Event</span>
              <h3>{featuredEvent.title}</h3>
              <p>{featuredEvent.description}</p>
              <div className="events-featured-actions">
                <button
                  type="button"
                  className="events-primary-button"
                  onClick={() => handleEventClick(featuredEvent)}
                >
                  {featuredEvent.slug ? "Read Full Story" : "Open Gallery"}
                </button>
                {featuredEvent.galleryLink && (
                  <a
                    className="events-secondary-button"
                    href={featuredEvent.galleryLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Gallery
                  </a>
                )}
              </div>
            </div>
            <div className="events-featured-image-wrap">
              <img
                src={getOptimizedImageSrc(featuredEvent.image)}
                alt={featuredEvent.title}
                className="events-featured-image"
                loading="lazy"
                decoding="async"
                onError={(event) => restoreOriginalImage(event, featuredEvent.image)}
              />
            </div>
          </article>
        )}

        <div className="events-grid">
          {events.map((event) => (
            <article
              className="event-card"
              key={event.title}
              onClick={() => handleEventClick(event)}
            >
              <div className="event-card-image-wrap">
                <img
                  src={getOptimizedImageSrc(event.image)}
                  alt={event.title}
                  className="event-card-image"
                  loading="lazy"
                  decoding="async"
                  onError={(imageEvent) => restoreOriginalImage(imageEvent, event.image)}
                />
              </div>
              <div className="event-card-body">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div className="event-card-footer">
                  <span className="event-card-link">
                    {event.slug ? "Read Full Story" : "View Gallery"}
                  </span>
                  {event.galleryLink ? (
                    <a
                      href={event.galleryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="event-card-gallery"
                      onClick={(clickEvent) => clickEvent.stopPropagation()}
                    >
                      Gallery ↗
                    </a>
                  ) : (
                    <span className="event-card-gallery muted">No Gallery Yet</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
