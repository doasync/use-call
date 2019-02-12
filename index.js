const { usePromise } = require('use-promise');
const { useRef } = require('react');

/**
 * Decorator for calling a function only once
 */

const once = (fn) => {
  if (typeof fn !== 'function') {
    throw new Error(`expected a function but got: ${fn}`);
  }

  let called = false;
  let result;

  return (...args) => {
    if (called) return result;
    called = true;
    result = fn(...args);
    return result;
  };
};

/**
 * Use a function call and save it to a ref
 */

const useCall = (fn, ...args) => {
  const result = useRef(null);
  const fnRef = useRef(null);

  if (fn !== fnRef.current) {
    if (typeof fn === 'function') {
      fnRef.current = fn;
      result.current = fn(...args);
    } else {
      throw new Error(`expected a function but got: ${fn}`);
    }
  }

  return result.current;
};

/**
 * Use promise from an async function call
 */

const useAsyncCall = (fn, ...args) => usePromise(useCall(fn, ...args));

module.exports = {
  once,
  useCall,
  useAsyncCall,
};
