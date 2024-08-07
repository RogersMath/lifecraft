import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GamePlay() {
  const [currentAge, setCurrentAge] = useState(16);
  const [netWorth, setNetWorth] = useState(0);
  const [career, setCareer] = useState('');

  const advanceTurn = () => {
    setCurrentAge(prevAge => prevAge + 0.25);  // Advance by 3 months
    // TODO: Update other stats based on player decisions and random events
  };

  return (
    <div>
      <h1>LifeCraft: Your Journey</h1>
      <div>
        <h2>Player Stats</h2>
        <p>Age: {currentAge.toFixed(2)}</p>
        <p>Net Worth: ${netWorth.toFixed(2)}</p>
        <p>Career: {career || 'Unemployed'}</p>
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={advanceTurn}>Advance 3 Months</button>
        {/* TODO: Add more action buttons (e.g., Change Career, Make Investment) */}
      </div>
      <div>
        <h2>Events</h2>
        {/* TODO: Display recent events or decisions here */}
        <p>No recent events.</p>
      </div>
      <Link to="/">Exit Game</Link>
    </div>
  );
}

export default GamePlay;