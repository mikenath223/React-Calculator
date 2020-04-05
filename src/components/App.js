import React from 'react';
import '../style.css';
import '../Normalize.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>The Calculator</h1>
        <Display result={this.state} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
