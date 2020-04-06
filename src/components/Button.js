import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { classname, name } = props;
  return (
    <button type="submit" name={name} className={`button ${classname}`}>{name}</button>
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
