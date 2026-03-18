import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import ReactMarkdown from 'react-markdown';
import './SingleNews.css';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vTl5Lf7ZrC8xKCeXSfHuA-4KSYWu2Iz3KXQFP2KtAytBIObOkS4HmS7t_d7tYFT61LHzdDTHx44OslS/pub?output=csv';

const SingleNews = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(SHEET_URL, {
      download: true,
      header: true,
      complete: (result) => {
        const found = (result.data || []).find((item) => item.slug === slug);
        setPost(found || null);
        setLoading(false);
      },
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="single-loading-wrapper">
        <div className="single-spinner"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <section className="single-news-wrapper">
        <div className="single-news-shell">
          <div className="single-empty-state">
            <h2>Post not found</h2>
            <p>The article you are looking for does not seem to exist.</p>
            <button className="single-back-button" onClick={() => navigate('/news')}>
              Back to News
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="single-news-wrapper">
      <div className="single-news-shell">
        <button className="single-back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <article className="single-article-card">
          <div className="single-hero">
            <p className="single-meta">
              <span className="single-category">{post.category || 'Article'}</span>
              <span className="single-divider">•</span>
              <span>{post.date}</span>
            </p>

            <h1 className="single-title">{post.title}</h1>

            {post.preview && <p className="single-preview">{post.preview}</p>}
          </div>

          {post.image && (
            <div className="single-image-wrap">
              <img
                className="single-image"
                src={post.image}
                alt={post.title}
                loading="lazy"
              />
            </div>
          )}

          <div className="single-content">
            <ReactMarkdown>{post.content || ''}</ReactMarkdown>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SingleNews;