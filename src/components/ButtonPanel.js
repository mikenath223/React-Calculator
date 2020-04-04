import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  renderButton = (c, n, width, col) => (
    <Button 
    classname={c} 
    name={n}
    onClick={() => this.props.onClick(n)}
    wide={width}
    color={col}
    />
  );

  render() {
    return (
      <div className="buttonPanel">
        <div>
          {this.renderButton('milky', 'AC', false, '#E0E0E0')}
          {this.renderButton('milky', '+/-', false, '#E0E0E0')}
          {this.renderButton('milky', '%', false, '#E0E0E0')}
          {this.renderButton('orange', '÷', false)}
        </div>
        <div>
          {this.renderButton('milky', '7', false, '#E0E0E0')}
          {this.renderButton('milky', '8', false, '#E0E0E0')}
          {this.renderButton('milky', '9', false, '#E0E0E0')}
          {this.renderButton('orange', 'x', false)}
        </div>
        <div>
          {this.renderButton('milky', '4', false, '#E0E0E0')}
          {this.renderButton('milky', '5', false, '#E0E0E0')}
          {this.renderButton('milky', '6', false, '#E0E0E0')}
          {this.renderButton('orange', '-', false)}
        </div>
        <div>
          {this.renderButton('milky', '1', false, '#E0E0E0')}
          {this.renderButton('milky', '2', false, '#E0E0E0')}
          {this.renderButton('milky', '3', false, '#E0E0E0')}
          {this.renderButton('orange', '+', false)}
        </div>
        <div>
          {this.renderButton('milky grow', '0', true, '#E0E0E0')}
          {this.renderButton('milky', '.', false, '#E0E0E0')}
          {this.renderButton('orange', '=', false)}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
