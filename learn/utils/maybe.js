/**
 * @namespace Maybe
 * @description A simple implementation of the Maybe monad for safe optional chaining and error avoidance.
 */
const Maybe = (function () {
  /**
   * @class
   * @description Represents a value that exists (non-null, non-undefined).
   * @param {*} x - The value to wrap.
   */
  const Some = function (x) {
    this.x = x;
  };

  /**
   * Applies a function to the contained value and wraps the result in a new Maybe.
   * @param {Function} fn - The function to apply.
   * @returns {Some|None}
   */
  Some.prototype.fmap = function (fn) {
    return Maybe.of(fn(this.x));
  };

  /**
   * Applies a function that returns a Maybe to the contained value (monadic bind).
   * @param {Function} fn - A function that returns a Maybe.
   * @returns {Some|None}
   */
  Some.prototype.bind = function (fn) {
    return fn(this.x);
  };

  /**
   * Returns the string representation of the instance.
   * @returns {string}
   */
  Some.prototype.toString = function () {
    return `Some(${this.x})`;
  };

  /**
   * @class
   * @description Represents the absence of a value.
   */
  const None = function () {};

  /** @returns {None} */
  None.fmap = () => None;

  /** @returns {None} */
  None.bind = () => None;

  /** @returns {string} */
  None.toString = () => "None";

  return {
    /**
     * Creates a Maybe from a value.
     * @param {*} x - The value to wrap.
     * @returns {Some|None}
     */
    of: (x) => (x === null || x === undefined ? None : new Some(x)),

    /**
     * Lifts a function to operate within the Maybe context.
     * @param {Function} fn - A function to lift.
     * @returns {Function} - A function that returns a Maybe.
     */
    lift:
      (fn) =>
      (...args) =>
        Maybe.of(fn(...args)),

    Some,
    None,
  };
})();
