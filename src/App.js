import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Inventory from './components/Inventory';
import DeckBuilder from './components/DeckBuilder';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/deckbuilder" element={<DeckBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
