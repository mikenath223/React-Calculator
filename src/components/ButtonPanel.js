import React, { PureComponent } from 'react';
import Button from './Button';

class ButtonPanel extends PureComponent {
  render() {
    const renderButton = (c, n) => (
      <Button classname={c} name={n} />
    );
    return (
      <div className="buttonPanel">
        <div>
          {renderButton('milky', 'AC')}
          {renderButton('milky', '+/-')}
          {renderButton('milky', '%')}
          {renderButton('orange', '÷')}
        </div>
        <div>
          {renderButton('milky', '7')}
          {renderButton('milky', '8')}
          {renderButton('milky', '9')}
          {renderButton('orange', 'x')}
        </div>
        <div>
          {renderButton('milky', '4')}
          {renderButton('milky', '5')}
          {renderButton('milky', '6')}
          {renderButton('orange', '-')}
        </div>
        <div>
          {renderButton('milky', '1')}
          {renderButton('milky', '2')}
          {renderButton('milky', '3')}
          {renderButton('orange', '+')}
        </div>
        <div>
          {renderButton('milky grow', '0')}
          {renderButton('milky', '.')}
          {renderButton('orange', '=')}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
