import operator from './operate'

const calculate = (data, buttonName) => {
  const isNum = (testStr) => /\d/.test(testStr);
  const isOp = (testStr) => /\+|-|x|÷|%/.test(testStr);

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    }
  }

  if (isNum(buttonName)) {
    return {
      next: (data.next || '') + buttonName
    }
  }

  if (!data.next) {
    if (isOp(buttonName) || (buttonName === '.') || (buttonName === '%') || (buttonName === '+/-')) {
      return {
        next: '0' + buttonName
      }
    }
  }

  if (isOp(buttonName)) {
    if (!isOp(data.next.charAt(data.next.length - 1))) {
      return {
        next: data.next + buttonName,
        operation: data.operation + buttonName,
      }
    }
  }

  if (data.operation) {

  }

  if (buttonName === '.') {
    if (isOp(data.next.charAt(data.next.length - 1))) {
      return {}
    }
    return {
      next: data.next + buttonName
    }
  }

  if (buttonName === '=') {
  }

  if (buttonName === '+/-') {
  }



}

export default calculate;