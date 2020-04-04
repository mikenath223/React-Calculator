import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { classname, name } = props;
  return (
    <button type="submit" className={`button ${classname}`}>{name}</button>
  );
};

Button.propTypes = {
  classname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
