import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function GameSetup() {
  const [playerName, setPlayerName] = useState('');
  const [startingAge, setStartingAge] = useState(16);

  const handleStartGame = () => {
    // TODO: Initialize game state with player name and starting age
    console.log(`Starting game for ${playerName} at age ${startingAge}`);
    // TODO: Redirect to GamePlay component
  };

  return (
    <div>
      <h1>LifeCraft: Game Setup</h1>
      <div>
        <label htmlFor="playerName">Your Name: </label>
        <input 
          type="text" 
          id="playerName" 
          value={playerName} 
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="startingAge">Starting Age: </label>
        <input 
          type="number" 
          id="startingAge" 
          value={startingAge} 
          onChange={(e) => setStartingAge(Number(e.target.value))}
          min="16" 
          max="80"
        />
      </div>
      <button onClick={handleStartGame}>Start Game</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default GameSetup;