import React from 'react';

const Button = props => <button className={`button ${props.classname}`}>{props.name}</button>;

export default Button;
