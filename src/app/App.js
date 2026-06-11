import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import Navbar from "../components/layout/Navbar";
import Contact from "../features/contact/Contact";
import ExecutivesPage from "../pages/ExecutivesPage";
import SurvivalPage from "../pages/SurvivalPage";
import NotFound from "../components/feedback/NotFound";
import AdARTPage from "../pages/ADARTPage";
import NewsPage from "../pages/NewsPage";
import NewsArticle from "../features/news/NewsArticle";
import MembershipSteps from "../features/membership/MembershipSteps";
import EventDetailPage from "../pages/EventDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<Contact />} />
        <Route path="/survival-guide" element={<SurvivalPage />} />
        <Route path="/team" element={<ExecutivesPage />} />
        <Route path="/adart" element={<AdARTPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsArticle />} />
        <Route path="/become-member" element={<MembershipSteps />} />
        <Route path="/events/:slug" element={<EventDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
