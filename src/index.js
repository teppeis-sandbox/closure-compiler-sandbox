/**
 * @param {(T|undefined)} a
 * @return {T}
 * @throws {Error} when property is undefined.
 * @template T
 */
function Required(a) {

  if (a !== undefined) {
    return a;
  }
  throw new Error('required property is undefined.');
};

/**
 * @param {(number)} a
 */
function Test(a) {
}

var a = /** @type {number|undefined} */(11);
Test(Required(a))
