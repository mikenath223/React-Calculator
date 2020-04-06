import operator from './operate';

const calculate = (data, buttonName) => {
  const isNum = testStr => /\d/.test(testStr);
  const isOp = testStr => {
    if (testStr.length > 1) {
      return false;
    }
    return /\+|-|x|÷|%/.test(testStr);
  };

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNum(buttonName)) {
    return {
      next: (data.next || '') + buttonName,
    };
  }

  if (!data.next) {
    if ((buttonName === '-') && (data.operation !== null && data.operation.endsWith('n'))) {
      return {
        next: null,
        operation: null,
      };
    }

    if (isOp(buttonName) || (buttonName === '.') || (buttonName === '%')) {
      return {
        next: `0${buttonName}`,
        operation: buttonName,
      };
    }
  }

  if (isOp(buttonName)) {
    if (!!data.operation && !isOp(data.next.charAt(data.next.length - 1))) {
      const op = data.operation.charAt(data.operation.length - 1);
      const nums = data.next.split(/\+|-|x|÷|%/);
      if ((data.operation.startsWith('n')) || data.next.startsWith('-')) {
        const res = operator(`-${nums[1]}`, nums[2], op);
        return {
          total: res,
          next: res + buttonName,
          operation: buttonName,
        };
      }
      const res = operator(nums[0], nums[1], op);
      return {
        total: res,
        next: res + buttonName,
        operation: buttonName,
      };
    }

    if (!isOp(data.next.charAt(data.next.length - 1))) {
      return {
        next: data.next + buttonName,
        operation: (data.operation || '') + buttonName,
      };
    }
  }

  if ((buttonName === '.')) {
    if (isOp(data.next.charAt(data.next.length - 1)) || data.next.endsWith('.')) {
      return {};
    }
    return {
      next: data.next + buttonName,
    };
  }

  if (buttonName === '+/-') {
    if ((!!data.operation && data.operation.startsWith('n')) && data.next.length < 28) {
      return {
        next: data.next.slice(1),
        operation: data.operation.slice(1),
      };
    }

    if (!!data.next && data.next.startsWith('-')) {
      return {
        total: data.total.slice(1),
        next: data.next.slice(1),
      };
    }

    if (!data.next) {
      return {
        next: `-${0}`,
        operation: 'n',
      };
    }

    return {
      next: `-${data.next}`,
      operation: `n${data.operation || ''}`,
    };
  }

  if (buttonName === '=') {
    if (isOp(data.next.charAt(data.next.length - 1))) {
      return {};
    }
    const op = data.operation.charAt(data.operation.length - 1);
    const nums = data.next.split(/\+|-|x|÷|%/);
    if (data.operation.startsWith('n') || data.next.startsWith('-')) {
      const res = operator(`-${nums[1]}`, nums[2], op);
      return {
        total: res,
        next: res,
        operation: null,
      };
    }
    const res = operator(nums[0], nums[1], op);
    return {
      total: res,
      next: res,
      operation: null,
    };
  }

  return {};
};

export default calculate;
