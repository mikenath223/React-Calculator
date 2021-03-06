import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    classname, name, color, wide, clickHandle,
  } = props;
  const col = color || '#101628';
  const dim = wide === true ? '50%' : '25%';
  const styles = {
    backgroundColor: col,
    width: dim,
  };
  return (
    <button type="submit" name={name} className={`button ${classname}`} onClick={() => clickHandle(name)} style={styles}>{name}</button>
  );
};

Button.propTypes = {
  classname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  clickHandle: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: '#101628',
};


export default Button;
