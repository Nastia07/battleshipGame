import * as React from 'react';
import { HeaderWithCounter } from './components/HeaderWithCounter';
import { BattleField } from './components/BattleField';
import { ResetButton } from './components/ResetButton';
import { useGameState } from './logic/useGameState';

import './App.css';

function App() {
  const {turn, reset} = useGameState()
  
  return (
    <div className="App">
      <HeaderWithCounter turn={turn}/>
      <BattleField/>
      <ResetButton reset={reset}/>
    </div>
  );
}

export default App;
