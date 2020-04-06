import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { output, input } = props;
  let blinkClass = 'blink';
  if (input.length > 1) {
    blinkClass = ''
  }
  return (
    <div className="display">
      <p className={`input ${blinkClass}`}>{input}</p>
      <p>{output}</p>
    </div>
  );
};

Display.propTypes = {
  output: PropTypes.string.isRequired,
};

Display.defaultProps = {
  output: '0',
};

export default Display;
