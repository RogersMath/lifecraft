import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Initial state
const initialState = {
  player: {
    age: 16,
    career: null,
    education: [],
    finances: {
      cash: 0,
      investments: 0,
      debts: 0,
    },
    relationships: [],
    skills: {},
    health: 100,
    happiness: 50,
  },
  gameSettings: {
    difficulty: 'normal',
    startingAge: 16,
  },
  currentTurn: 0,
};

// Action types
const ActionTypes = {
  UPDATE_PLAYER: 'UPDATE_PLAYER',
  UPDATE_GAME_SETTINGS: 'UPDATE_GAME_SETTINGS',
  ADVANCE_TURN: 'ADVANCE_TURN',
  RESET_GAME: 'RESET_GAME',
};

// Reducer function
function gameReducer(state, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_PLAYER:
      return { ...state, player: { ...state.player, ...action.payload } };
    case ActionTypes.UPDATE_GAME_SETTINGS:
      return { ...state, gameSettings: { ...state.gameSettings, ...action.payload } };
    case ActionTypes.ADVANCE_TURN:
      return { ...state, currentTurn: state.currentTurn + 1 };
    case ActionTypes.RESET_GAME:
      return initialState;
    default:
      return state;
  }
}

// Create context
const GameContext = createContext();

// Context provider component
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Load state from local storage on initial render
  useEffect(() => {
    const savedState = localStorage.getItem('gameState');
    if (savedState) {
      dispatch({ type: ActionTypes.RESET_GAME, payload: JSON.parse(savedState) });
    }
  }, []);

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(state));
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

// Custom hook to use the game context
export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}

export { ActionTypes };