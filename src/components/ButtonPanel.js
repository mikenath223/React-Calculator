import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class ButtonPanel extends React.Component {
  clickHandler(n) {
    const { clickHandle } = this.props;
    clickHandle(n);
  }

  renderButton(c, n, width, col) {
    return (
      <Button
        classname={c}
        name={n}
        clickHandle={n => this.clickHandler(n)}
        wide={width}
        color={col}
      />
    );
  }

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

ButtonPanel.propTypes = {
  clickHandle: PropTypes.func.isRequired,
};

export default ButtonPanel;
