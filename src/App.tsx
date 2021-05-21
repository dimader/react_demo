import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HalloEarth, HalloWelt, Hallo, Hallo2 } from './components/HalloWelt';

function App() {
  return (
    <React.Fragment>
      <HalloWelt />
      <HalloEarth />
      
      <Hallo name="react" sprache="Hallo" />
      <Hallo name="Weeeellltt!!!" />
      
      <Hallo2 />

    </React.Fragment>
  );
}

export default App;