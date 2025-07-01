/* Maybe Monad Implement from https://eddmann.com/posts/maybe-in-javascript/ */

/**
 * @namespace Maybe
 * @description A simple implementation of the Maybe monad for safe optional chaining and error avoidance.
 */
const Maybe = (function () {
  /**
   * @class
   * @classdesc Represents a value that exists (i.e., is not null or undefined).
   * @param {*} x - The value to wrap.
   */
  const Some = function (x) {
    /** @type {*} */
    this.x = x;
  };

  /**
   * Applies a function to the contained value and wraps the result in a new Maybe.
   * @function
   * @name Some#fmap
   * @param {Function} fn - Function to apply to the value.
   * @returns {Some|None} A new Maybe wrapping the result.
   */
  Some.prototype.fmap = function (fn) {
    return Maybe.of(fn(this.x));
  };

  /**
   * Applies a function that returns a Maybe to the contained value.
   * Equivalent to monadic bind or flatMap.
   * @function
   * @name Some#bind
   * @param {Function} fn - Function returning a Maybe.
   * @returns {Some|None}
   */
  Some.prototype.bind = function (fn) {
    return fn(this.x);
  };

  /**
   * Returns a string representation of this Some value.
   * @function
   * @name Some#toString
   * @returns {string}
   */
  Some.prototype.toString = function () {
    return `Some(${this.x})`;
  };

  /**
   * @class
   * @classdesc Represents the absence of a value.
   */
  const None = function () {};

  /**
   * Inert fmap for None; always returns None.
   * @function
   * @name None#fmap
   * @returns {None}
   */
  None.fmap = () => None;

  /**
   * Inert bind for None; always returns None.
   * @function
   * @name None#bind
   * @returns {None}
   */
  None.bind = () => None;

  /**
   * Returns a string representation of None.
   * @function
   * @name None#toString
   * @returns {string}
   */
  None.toString = () => "None";

  return {
    /**
     * Wraps a value into a Maybe.
     * Returns Some if the value is not null/undefined, otherwise returns None.
     * @function
     * @name Maybe.of
     * @param {*} x - The value to wrap.
     * @returns {Some|None}
     */
    of: (x) => (x === null || x === undefined ? None : new Some(x)),

    /**
     * Lifts a function to operate within the Maybe context.
     * @function
     * @name Maybe.lift
     * @param {Function} fn - A function to lift.
     * @returns {Function} A new function that returns a Maybe.
     */
    lift:
      (fn) =>
      (...args) =>
        Maybe.of(fn(...args)),

    Some,
    None,
  };
})();
