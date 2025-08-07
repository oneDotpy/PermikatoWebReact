import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import ReactMarkdown from 'react-markdown';
import './SingleNews.css';

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTl5Lf7ZrC8xKCeXSfHuA-4KSYWu2Iz3KXQFP2KtAytBIObOkS4HmS7t_d7tYFT61LHzdDTHx44OslS/pub?output=csv';

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
        const found = result.data.find((item) => item.slug === slug);
        setPost(found);
        setLoading(false);
      },
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="single-news-wrapper">
      <button className="back-button" onClick={() => navigate(-1)}>&lt; Back</button>

      <h1 className="single-title">{post.title}</h1>
      <p className="single-category">{post.category} — {post.date}</p>
      <img 
        className="single-image" 
        src={post.image} 
        alt={post.title} 
        loading='lazy'
      />
      <div className="single-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default SingleNews;
