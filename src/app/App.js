import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../features/contact/Contact";
import Executives from "../features/executives/Executives";
import SurvivalGuide from "../features/guides/SurvivalGuide";
import NotFound from "../components/feedback/NotFound";
import AdART from "../features/guides/AdART";
import NewsList from "../features/news/NewsList";
import NewsArticle from "../features/news/NewsArticle";
import MembershipSteps from "../features/membership/MembershipSteps";
import EventDetail from "../features/events/EventDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<Contact />} />
          <Route path="/survival-guide" element={<SurvivalGuide />} />
          <Route path="/team" element={<Executives />} />
          <Route path="/adart" element={<AdART />} />
          <Route path="/news" element={<NewsList />} />
          <Route path="/news/:slug" element={<NewsArticle />} />
          <Route path="/become-member" element={<MembershipSteps />} />
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
