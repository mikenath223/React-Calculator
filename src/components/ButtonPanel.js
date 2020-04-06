import React, { PureComponent } from 'react';
import Button from './Button';

class ButtonPanel extends PureComponent {
  render() {
    const renderButton = (c, n, width, col) => (
      <Button
        classname={c}
        name={n}
        wide={width}
        color={col}
      />
    );
    return (
      <div className="buttonPanel">
        <div>
          {renderButton('milky', 'AC', false, '#E0E0E0')}
          {renderButton('milky', '+/-', false, '#E0E0E0')}
          {renderButton('milky', '%', false, '#E0E0E0')}
          {renderButton('orange', '÷', false)}
        </div>
        <div>
          {renderButton('milky', '7', false, '#E0E0E0')}
          {renderButton('milky', '8', false, '#E0E0E0')}
          {renderButton('milky', '9', false, '#E0E0E0')}
          {renderButton('orange', 'x', false)}
        </div>
        <div>
          {renderButton('milky', '4', false, '#E0E0E0')}
          {renderButton('milky', '5', false, '#E0E0E0')}
          {renderButton('milky', '6', false, '#E0E0E0')}
          {renderButton('orange', '-', false)}
        </div>
        <div>
          {renderButton('milky', '1', false, '#E0E0E0')}
          {renderButton('milky', '2', false, '#E0E0E0')}
          {renderButton('milky', '3', false, '#E0E0E0')}
          {renderButton('orange', '+', false)}
        </div>
        <div>
          {renderButton('milky grow', '0', true, '#E0E0E0')}
          {renderButton('milky', '.', false, '#E0E0E0')}
          {renderButton('orange', '=', false)}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
