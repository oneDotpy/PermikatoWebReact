import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { useNavigate } from 'react-router-dom';
import './News.css';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTl5Lf7ZrC8xKCeXSfHuA-4KSYWu2Iz3KXQFP2KtAytBIObOkS4HmS7t_d7tYFT61LHzdDTHx44OslS/pub?output=csv';

const NewsPage = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (result) => {
        setPosts(result.data);
      },
    });
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const handleClick = (slug) => {
    navigate(`/news/${slug}`);
  };

  return (
    <div className="news-wrapper">
      <h2 className="news-title">PERMIKATO Bercerita</h2>
      <div className="news-grid">
        {posts.slice(0, visibleCount).map((item, index) => (
          <div
            key={index}
            className="news-card"
            onClick={() => handleClick(item.slug)}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              loading='lazy'
            />
            <p className="category">{item.category}</p>
            <h3>{item.title}</h3>
            <p>{item.preview}</p>
            <p className="date">{item.date}</p>
          </div>
        ))}
      </div>
      {visibleCount < posts.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Load more posts
        </button>
      )}
    </div>
  );
};

export default NewsPage;
