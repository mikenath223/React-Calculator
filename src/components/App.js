import React from 'react';
import '../style.css';
import '../Normalize.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null
    };
  }

  handleClick = (n) => {
    this.setState(calculate(this.state, n));
  }

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
        </h1>
        <Display output={this.state.total || '0'}
          input={this.state.next || '_'}
        />
        <ButtonPanel clickHandle={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
