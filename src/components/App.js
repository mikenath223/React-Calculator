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
        <h1>The Calculator</h1>
        <Display output={this.state.total || this.state.next || '0'}
        />
        <ButtonPanel clickHandle={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
