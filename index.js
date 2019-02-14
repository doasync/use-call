/* eslint-disable no-param-reassign,no-use-before-define */

const { usePromise } = require('use-promise');
const { useRef } = require('react');

const once = (fn, config = { attach: false, strict: false }) => {
  if (typeof fn !== 'function') {
    throw new Error(`expected a function but got: ${typeof fn}`);
  }

  const { attach, strict } = config;
  const name = fn.displayName || fn.name || '<anonymous>';
  let cache;

  f.called = false;

  if (attach === true) {
    fn.once = f;
  }

  function f (...args) {
    if (f.called) {
      if (strict === true) {
        throw new Error(`function "${name}" can only be called once`);
      }
      return cache;
    }

    f.called = true;
    cache = fn(...args);
    f.cache = () => cache;

    return cache;
  }

  return f;
};

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
  once,
  useCall,
  useAsyncCall,
};
