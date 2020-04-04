import React from 'react';
// import PropTypes from 'prop-types';
import '../style.css';
import '../Normalize.css'
// import Big from 'big-js';
import ButtonPanel from './ButtonPanel'
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  render() {
    return (
      <div className="main-container">
        <h1>The Calculator</h1>
        <Display />
        <ButtonPanel />
      </div>
    )
  }
}

export default App;