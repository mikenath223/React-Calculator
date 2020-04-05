import operator from './operate'

const calculate = (data, buttonName) => {
  const isNum = (testStr) => {
    return /\d/.test(testStr)
  }

  if (isNum(buttonName)) {
    if (data.next == '0' && buttonName === '0') {
      return {}
    }

    if (data.operation) {
      if (data.next) {
        return { next: data.next + buttonName }
      } else {
        return { next: buttonName };
      }
    }

    if (data.next) {
      return {
        next: data.next + buttonName,
        total: null,
      }
    }
    return {
      next: buttonName,
      total: null,
    }
  }

  if (data.operation) {
    return {
      total: operator(data.total, data.next, data.operation),
      next: null,
      operation: buttonName
    }
  }

  if (!data.next) {
    return { operation: buttonName };
  }

  if (buttonName === '.') {
    if (data.next) {
      if (data.next.indexOf('.') !== -1) {
        return {}
      }
      return { next: data.next + '.'}
    }
    if (data.operation) {
      return { next: '0.' }
    }
    if (data.total) {
      if (data.total.indexOf('.') !== -1) {
        return {}
      } else {
        return { total: '0.' };
      }
    }
    return { total: '0.'}
  }

  if (buttonName === '=') {
    if (data.next && data.operation) {
      return {
        total: operator(data.total, data.next, data.operation),
        next: null,
        operation: null
      };
    } else {
      return {}
    }
  }

  if (buttonName === '+/-') {
    if (data.next) {
      return { next: (-1 * String(+(dat.next))) }
    } else if (data.total) {
      return { total: (-1 * String(data.total))}
    } else {
      return {}
    }
  }

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    }
  }

  return {
    total: data.next,
    next: null,
    operation: buttonName
  }

}

export default calculate;