import React from 'react';
import Button from "./Button";


class ButtonPanel extends React.Component {
  renderButton(c, n) {
    return (
      <Button classname={c} name={n} />
    )
  }

  render() {
    return (
      <div className="buttonPanel">
        <div>
          {this.renderButton('milky', 'AC')}
          {this.renderButton('milky', '+/-')}
          {this.renderButton('milky', '%')}
          {this.renderButton('orange', '÷')}
        </div>
        <div>
          {this.renderButton('milky', '7')}
          {this.renderButton('milky', '8')}
          {this.renderButton('milky', '9')}
          {this.renderButton('orange', 'x')}
        </div>
        <div>
          {this.renderButton('milky', '4')}
          {this.renderButton('milky', '5')}
          {this.renderButton('milky', '6')}
          {this.renderButton('orange', '-')}
        </div>
        <div>
          {this.renderButton('milky', '1')}
          {this.renderButton('milky', '2')}
          {this.renderButton('milky', '3')}
          {this.renderButton('orange', '+')}
        </div>
        <div>
          {this.renderButton('milky', '0')}
          {this.renderButton('milky', '.')}
          {this.renderButton('orange', '=')}
        </div>
      </div>
    )
  }
}

export default ButtonPanel;