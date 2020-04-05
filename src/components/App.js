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

  handleClick(i) {
    this.setState(calculate(this.state, i));
  }

  render() {
    const { result } = this.state;
    return (
      <div className="main-container">
        <h1>The Calculator</h1>
        <Display output={result.total || result.next || '0'} />
        <ButtonPanel onClick={i => this.handleClick(i).bind(this)} />
      </div>
    );
  }
}

export default App;
