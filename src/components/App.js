import React, { PureComponent } from 'react';
import '../style.css';
import '../Normalize.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends PureComponent {
  render() {
    return (
      <div className="main-container">
        <h1>
          <span>T</span>
          <span>H</span>
          <span>E</span>
          <span> </span>
          <span>C</span>
          <span>A</span>
          <span>L</span>
          <span>C</span>
          <span>U</span>
          <span>L</span>
          <span>A</span>
          <span>T</span>
          <span>O</span>
          <span>R</span>
          <span className="hide">{calculate}</span>
        </h1>
        <Display
          output="0"
          input="_"
        />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
