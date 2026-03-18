import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import './News.css';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTl5Lf7ZrC8xKCeXSfHuA-4KSYWu2Iz3KXQFP2KtAytBIObOkS4HmS7t_d7tYFT61LHzdDTHx44OslS/pub?output=csv';

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const navigate = useNavigate();

  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (result) => {
        const cleanedPosts = (result.data || []).filter(
          (item) => item.title && item.slug
        );
        setPosts(cleanedPosts);
      },
    });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleClick = (slug) => {
    navigate(`/news/${slug}`);
  };

  return (
    <section className="news-wrapper">
      <div className="news-shell">
        <div className="news-hero">
          <span className="news-eyebrow">Stories & Updates</span>
          <h2 className="news-title">
            PERMIKATO <span>Bercerita</span>
          </h2>
          <p className="news-subtitle">
            Explore stories, reflections, and updates from the PERMIKATO
            community in a more personal and meaningful way.
          </p>
        </div>

        <div className="news-grid">
          {posts.slice(0, visibleCount).map((item, index) => (
            <article
              key={index}
              className="news-card"
              onClick={() => handleClick(item.slug)}
            >
              <div className="news-image-wrap">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>

              <div className="news-card-body">
                <p className="category">{item.category || 'Article'}</p>
                <h3>{item.title}</h3>
                <p className="news-preview">{item.preview}</p>
                <div className="news-card-footer">
                  <p className="date">{item.date}</p>
                  <span className="news-readmore">Read article</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visibleCount < posts.length && (
          <div className="news-loadmore-wrap">
            <button className="load-more" onClick={handleLoadMore}>
              Load more posts
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsPage;