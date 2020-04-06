import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    classname, name, color, wide, click,
  } = props;
  const col = color || '#F5913E';
  const dim = wide === true ? '50%' : '25%';
  const styles = {
    backgroundColor: col,
    width: dim,
  };
  return (
    <button type="submit" className={`button ${classname}`} onClick={click} style={styles}>{name}</button>
  );
};

Button.propTypes = {
  classname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#F5913E',
};

export default Button;
