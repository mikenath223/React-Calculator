import React from 'react';
import '../style.css';
import '../Normalize.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'hello',
    };
  }

  handleClick(i) {
    this.setState({
      input: `${this.input} ${i}`,
    });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="main-container">
        <h1>The Calculator</h1>
        <Display output={input} />
        <ButtonPanel onClick={i => this.handleClick(i).bind(this)} />
      </div>
    );
  }
}

export default App;
