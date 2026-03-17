import React, { useEffect, useMemo, useState } from "react";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";
import "./Events.css";

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQvx5UO9CVXqc06OmTxGJZTG90ml0CpElXPpNhYZtMdcF4yJJ4BjVUJUz76is0YzAf5RTwJpAI3a3jQ/pub?output=csv";

const eventContent = {
  "Welcoming Party 2024": {
    slug: "welcoming-party",
    tag: "Community",
    shortDescription:
      "A warm and energetic welcome for new Indonesian students in Toronto, filled with games, music, friendship, and a first taste of home as they begin their journey in a new city.",
    fullDescription: [
      "The PERMIKATO Welcoming Party 2024 served as a cornerstone event for the Indonesian student community, fostering new connections and providing a vibrant introduction to life in the Greater Toronto Area (GTA). Held on September 28, 2024, the gathering brought together incoming students for the 2024/2025 academic year, Indonesian government representatives, and a wide array of student and religious organizations.",
      "The event opened with a meaningful bridge between students and the Indonesian government. Ms. Dyah Lestari Asmarani, representing the Consulate General of Indonesia in Toronto (KJRI Toronto), delivered an opening speech and presentation regarding the consulate’s vital services. This was followed by a warm welcome from the PERMIKA Toronto President, Gabriel Reyes Situmeang, who emphasized the organization’s role in nurturing the talents and aspirations of the student body.",
      "At its core, the Welcoming Party was designed to break barriers and spark friendships through active engagement. Divided into four teams—Blue, Yellow, Green, and Red—participants rotated through a series of Station Games that tested their communication and creativity. These included Eat Bulaga, a fast-paced guessing game relying on yes, no, or maybe cues; Gesture Telepathy, a challenge in non-verbal communication and body language; Guess Who, a sequence-based game identifying famous figures from actors to national heroes; and the Back Writing Challenge, where players sketched letters on one another’s backs to correctly spell words.",
      "A standout highlight occurred during the Ishoma break session. While attendees enjoyed lunch provided for 177 guests and officials, the atmosphere turned celebratory as President Gabriel Reyes Situmeang took to the stage with a guitar. This impromptu performance invited students to come up and sing along, transforming a standard break into a moment of genuine community bonding.",
      "The event concluded with a networking and booth visitation session, allowing students to engage with collaborators such as UTISA (St. George), ISA UTM, TMUISA, and UWISA, the latter of which saw guests traveling from as far as Waterloo to participate.",
      "To top it all off, the kitchens of the Consulate office provided warm, Indonesian-style food. It was well received, and to a lot of students coming in for the first time, it was certainly a taste of home. As the first major gathering of the academic year, the Welcoming Party 2024 successfully laid a supportive foundation for the Indonesian community in Toronto, blending official guidance with the warmth of shared music and play.",
    ],
  },

  "Indonesian Focus Series 2024": {
    slug: "indonesian-focus-series",
    tag: "Discussion",
    shortDescription:
      "A thoughtful and engaging panel discussion that brought students, academics, and the Indonesian diaspora together to reflect on the evolution of Indonesia’s democracy and its global significance.",
    fullDescription: [
      "The Indonesian Focus Series (IFS) is a panel-discussion event by PERMIKATO, sponsored by The Munk School of Global Affairs & Public Policy at the University of Toronto. The event made a debut at the University of Toronto, bringing together students, academics, and the Indonesian diaspora for an insightful dialogue on the evolution of Indonesia’s democracy.",
      "Hosted by PERMIKATO in collaboration with the Asian Institute, Munk School of Global Affairs & Public Policy, the event featured distinguished speakers Professor Jacques Bertrand and Irene Poetranto, who explored what has changed, and what remains constant, in Indonesia’s democratic landscape.",
      "With 35 attendees from diverse backgrounds, the discussion became an engaging exchange of ideas. Students engaged with critical questions, while community members brought perspectives shaped by past political shifts. The support of the Indonesian Consulate General in Toronto and the Embassy of Indonesia in Canada added depth through opening remarks and video messages.",
      "As IFS 2024 marks the first instance of the Indonesian Focus Series, this event sets the foundation for more accessible, academically driven discussions on Indonesia’s global significance, which unite community and international perspectives in one room.",
    ],
  },

  "Permikato goes to TIFF": {
    tag: "Culture",
    shortDescription:
      "A cultural outing where members experience the Toronto International Film Festival together and enjoy one of the city’s most iconic arts events.",
  },
  "Spook n Seek": {
    tag: "Social",
    shortDescription:
      "A fun seasonal social event with playful challenges and a casual atmosphere for members to connect.",
  },
  "ASPIRE 2024": {
    tag: "Leadership",
    shortDescription:
      "A development-focused event that encourages students to grow their ambitions, build networks, and learn from peers and mentors.",
  },
  PERMISI: {
    tag: "Collaboration",
    shortDescription:
      "A collaborative gathering that connects Indonesian student communities across campuses and strengthens shared identity.",
  },
  "League of Toronto": {
    tag: "Sports",
    shortDescription:
      "A sports-centered event that brings members together through friendly competition, teamwork, and school spirit.",
  },
  "And more...": {
    tag: "Coming Soon",
    shortDescription:
      "More exciting programs are on the way, from social gatherings and cultural activities to academic and professional events.",
  },
};

function Events() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Papa.parse(SHEET_URL, {
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
              tag: extra.tag || "Event",
              slug: extra.slug || null,
              description:
                event.description?.trim() ||
                extra.shortDescription ||
                "More details coming soon.",
            };
          });

        setEvents(cleaned);
      },
      error: (error) => {
        console.error("Failed to load events CSV:", error);
      },
    });
  }, []);

  const featuredEvent = useMemo(() => events[0] || null, [events]);

  const handleEventClick = (event) => {
    if (event.slug) {
      navigate(`/events/${event.slug}`, { state: { event } });
      return;
    }

    if (event.galleryLink) {
      window.open(event.galleryLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="events" className="events-section">
      <div className="events-shell">
        <div className="events-header">
          <div>
            <span className="events-eyebrow">What we do</span>
            <h2>Events that bring Indonesian students together in Toronto</h2>
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
                  {featuredEvent.slug ? "Read full story" : "Open gallery"}
                </button>

                {featuredEvent.galleryLink && (
                  <a
                    className="events-secondary-button"
                    href={featuredEvent.galleryLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open gallery
                  </a>
                )}
              </div>
            </div>

            <div className="events-featured-image-wrap">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.title}
                className="events-featured-image"
                loading="lazy"
              />
            </div>
          </article>
        )}

        <div className="events-grid">
          {events.map((event, index) => (
            <article
              className="event-card"
              key={`${event.title}-${index}`}
              onClick={() => handleEventClick(event)}
            >
              <div className="event-card-image-wrap">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-card-image"
                  loading="lazy"
                />
                <span className="event-card-chip">{event.tag}</span>
              </div>

              <div className="event-card-body">
                <h3>{event.title}</h3>
                <p>{event.description}</p>

                <div className="event-card-footer">
                  <span className="event-card-link">
                    {event.slug ? "Read full story" : "View gallery"}
                  </span>

                  {event.galleryLink ? (
                    <a
                      href={event.galleryLink}
                      target="_blank"
                      rel="noreferrer"
                      className="event-card-gallery"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Gallery ↗
                    </a>
                  ) : (
                    <span className="event-card-gallery muted">
                      No gallery yet
                    </span>
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
export { eventContent, SHEET_URL };