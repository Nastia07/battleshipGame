import * as React from 'react';
import { HeaderWithCounter } from './components/HeaderWithCounter';
import { Battlefield } from './components/Battlefield';
import { ResetButton } from './components/ResetButton';
import { useGameState } from './logic/useGameState';

import './App.css';

function App() {
  const {turn, reset, matrix, onFire, won} = useGameState();
  
  if (won){
    alert('MOSCOW NEGATIVELY SURFACED!!!')
  }

  return (
    <div className="App">
      <HeaderWithCounter turn={turn}/>
      <Battlefield matrix={matrix} onFire={onFire}/>
      <ResetButton reset={reset}/>
    </div>
  );
}

export default App;
