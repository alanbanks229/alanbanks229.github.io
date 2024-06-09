/* eslint-disable @typescript-eslint/no-explicit-any */

type Callback = (...args: any[]) => void;

const throttle = (callback: Callback, limit: number): Callback => {
  let waiting = false;
  return function (...args: any[]) {
    if (!waiting) {
      callback(...args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};


export {
  throttle
}