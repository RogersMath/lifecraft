import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to LifeCraft</h1>
      <Link to="/setup">Start New Game</Link>
    </div>
  );
}

export default Home;