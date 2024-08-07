import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame, ActionTypes } from '../context/GameContext';

function GameSetup() {
  const { dispatch } = useGame();
  const navigate = useNavigate();
  const [startingAge, setStartingAge] = useState(16);
  const [difficulty, setDifficulty] = useState('normal');

  const handleStartGame = () => {
    dispatch({
      type: ActionTypes.UPDATE_GAME_SETTINGS,
      payload: { startingAge, difficulty },
    });
    dispatch({
      type: ActionTypes.UPDATE_PLAYER,
      payload: { age: startingAge },
    });
    navigate('/play');
  };

  return (
    <div>
      <h1>Game Setup</h1>
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
      <div>
        <label htmlFor="difficulty">Difficulty: </label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="normal">Normal</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
}

export default GameSetup;