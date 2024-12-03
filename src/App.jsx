import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/common/Navigation';
import Home from './pages/Home';
import OutfitPage from './pages/OutfitPage';
import PriceComparisonPage from './pages/PriceComparisonPage';
import ChatbotPage from './pages/ChatbotPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outfits" element={<OutfitPage />} />
          <Route path="/price-comparison" element={<PriceComparisonPage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
        </Routes>
      </div>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Your routes */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;