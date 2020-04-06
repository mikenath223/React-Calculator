import Big from 'big.js';

const operator = (num1, num2, operand) => {
  const x = Big(num1);
  const y = Big(num2);

  if (operand === '+') {
    return x.plus(y).toString();
  } if (operand === '-') {
    return x.minus(y).toString();
  } if (operand === '÷') {
    return x.div(y).toString();
  } if (operand === 'x') {
    return x.mul(y).toString();
  } if (operand === '%') {
    return x.mod(y).toString();
  }
  throw Error('Error');
};


export default operator;
