/* eslint-disable no-param-reassign, no-use-before-define */

const { useRef } = require('react');
const { usePromise } = require('use-promise');

const useCall = (fn, ...args) => {
  const result = useRef(null);
  const fnRef = useRef(null);

  if (fn !== fnRef.current) {
    if (typeof fn === 'function') {
      fnRef.current = fn;
      result.current = fn(...args);
    } else {
      throw new Error(`expected a function but got: ${typeof fn}`);
    }
  }

  return result.current;
};

const useAsyncCall = (fn, ...args) => usePromise(useCall(fn, ...args));

module.exports = {
  useCall,
  useAsyncCall,
};
