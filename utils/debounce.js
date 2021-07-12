/* debounce functuion, what take as paramereters : 
- functuion what need to be slowed down
- number, which set up time of delay

*/
export const debounce = (fn, ms) => {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms);
  };
};
