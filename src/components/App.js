import React from 'react';
import '../style.css';
import '../Normalize.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => (
  <div className="main-container">
    <h1>The Calculator</h1>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
