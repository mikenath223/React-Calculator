import operator from './operate'

const calculate = (data, buttonName) => {
  const isNum = (testStr) => /\d/.test(testStr);
  const isOp = (testStr) => {
    if (testStr.length > 1) {
      return false
    }
    return /\+|-|x|÷|%/.test(testStr)
  };

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

    if ((buttonName === '-') && (data.operation !== null && data.operation.endsWith('n'))) {
      return {
        next: 'null',
        operation: null
      }
    }

    if (isOp(buttonName) || (buttonName === '.') || (buttonName === '%')) {
      return {
        next: '0' + buttonName
      }
    }
  }

  if (isOp(buttonName)) {
    if (!isOp(data.next.charAt(data.next.length - 1))) {
      return {
        next: data.next + buttonName,
        operation: (data.operation || '') + buttonName,
      }
    }
  }

  if ((buttonName === '.')) {
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
    if (!data.next) {
      return {
        next: '-',
        operation: data.operation + 'n'
      }
    }
    if (!data.operation) {
      return {
        next: '-' + data.next,
        operation: 'n'
      }
    }
    if (data.operation === 'n') {
      return {
        next: data.next.slice(1),
        operation: null
      }
    }
    if (((data.operation !== null) && (data.operation.length > 1)) && (data.operation.endsWith('-') || data.operation.endsWith('n'))) {
      return {
        next: data.next.slice(0, data.next.length - 1),
        operation: data.operation.slice(0, data.operation.length - 1)
      }
    }
    if (data.next.startsWith('-') && data.next.length < 1) {
      return {
        next: 'data.next.slice(1)',
        operation: null
      }
    }
    return {
      next: data.next + '-',
      operation: data.operation + 'n'
    }
  }



}

export default calculate;