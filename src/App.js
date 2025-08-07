import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import ExecsPage from "./pages/Execs";
import SurvivalPage from "./pages/SurvivalPage";
import NotFound from "./components/NotFound";
import AdARTPage from "./pages/ADARTPage";
import NewsPageFoot from "./pages/NewsPage";
import SingleNews from "./components/SingleNews";
import MembershipSteps from "./components/MembershipShips";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Contact />} />
        <Route path="/survival-guide" element={<SurvivalPage />} />
        <Route path="/team" element={<ExecsPage />} />
        <Route path="/adart" element={<AdARTPage />} />
        <Route path="/news" element={<NewsPageFoot />} />
        <Route path="/news/:slug" element={<SingleNews />} />
        <Route path="become-member" element={<MembershipSteps />} />

        {/* Catch-all route for invalid paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
