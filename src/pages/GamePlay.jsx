import React from 'react';
import { useGame, ActionTypes } from '../context/GameContext';

function GamePlay() {
  const { state, dispatch } = useGame();
  const { player, currentTurn } = state;

  const advanceTurn = () => {
    // Here we'll implement logic for advancing the turn
    // For now, we'll just increment the turn counter
    dispatch({ type: ActionTypes.ADVANCE_TURN });

    // Update player age every 4 turns (1 year)
    if (currentTurn % 4 === 3) {
      dispatch({
        type: ActionTypes.UPDATE_PLAYER,
        payload: { age: player.age + 1 }
      });
    }
  };

  const takeCareAction = () => {
    // Implement logic for taking care of health
    dispatch({
      type: ActionTypes.UPDATE_PLAYER,
      payload: { health: Math.min(player.health + 10, 100) }
    });
    advanceTurn();
  };

  const workAction = () => {
    // Implement logic for working
    const earnings = 1000; // Simplified earnings
    dispatch({
      type: ActionTypes.UPDATE_PLAYER,
      payload: { 
        finances: {
          ...player.finances,
          cash: player.finances.cash + earnings
        }
      }
    });
    advanceTurn();
  };

  const studyAction = () => {
    // Implement logic for studying
    dispatch({
      type: ActionTypes.UPDATE_PLAYER,
      payload: { 
        skills: {
          ...player.skills,
          knowledge: (player.skills.knowledge || 0) + 1
        }
      }
    });
    advanceTurn();
  };

  return (
    <div>
      <h1>LifeCraft</h1>
      <div>
        <h2>Player Information</h2>
        <p>Age: {player.age}</p>
        <p>Health: {player.health}</p>
        <p>Cash: ${player.finances.cash}</p>
        <p>Knowledge: {player.skills.knowledge || 0}</p>
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={takeCareAction}>Take Care</button>
        <button onClick={workAction}>Work</button>
        <button onClick={studyAction}>Study</button>
      </div>
      <div>
        <h2>Game Information</h2>
        <p>Current Turn: {currentTurn}</p>
      </div>
    </div>
  );
}

export default GamePlay;