import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import pages (we'll create these next)
import Home from './pages/Home';
import GameSetup from './pages/GameSetup';
import GamePlay from './pages/GamePlay';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<GameSetup />} />
          <Route path="/play" element={<GamePlay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;