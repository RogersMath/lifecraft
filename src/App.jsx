import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import Home from './pages/Home';
import GameSetup from './pages/GameSetup';
import GamePlay from './pages/GamePlay';

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<GameSetup />} />
          <Route path="/play" element={<GamePlay />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;