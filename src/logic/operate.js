import Big from 'big.js'

const operator = (num1, num2, operand) => {
  let x  = Big(num1)
  let y = Big(num2)

  if (operand === '+') {
    return x.plus(y).toString()
  } else if (operand ==='-') {
    return x.minus(y).toString()
  } else if (operand === '÷') {
    return x.div(y).toString()
  } else if(operand === 'x') {
    return x.mul(y).toString()
  } else if(operand === '%') {
    return x.mod(y).toString()
  } else {
    return operand + ' does not exist'
  }
}


export default operator;