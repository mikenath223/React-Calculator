import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    classname, name, color, wide,
  } = props;
  const col = color || '#F5913E';
  const dim = wide === true ? '50%' : '25%';
  const styles = {
    backgroundColor: col,
    width: dim,
  };
  return (
    <button type="submit" name={name} className={`button ${classname}`} style={styles}>{name}</button>
  );
};

Button.propTypes = {
  classname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  color: '#F5913E',
};


export default Button;
