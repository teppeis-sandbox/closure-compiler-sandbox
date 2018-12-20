goog.provide('app.Foo');

/**
 * @constructor
 */
app.Foo = function() {};

/**
 * @return {string}
 * @public
 */
app.Foo.prototype.explicitPublic = function() {
  return 'explicitPublic!';
};

/**
 * @return {string}
 */
app.Foo.prototype.implicitPublic = function() {
  return 'implicitPublic!';
};
