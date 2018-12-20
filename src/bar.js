goog.provide('app.Bar');

goog.require('app.Foo');

/**
 * @constructor
 * @extends {app.Foo}
 */
app.Bar = function() {};

/**
 * `WARNING - Overriding PUBLIC property of app.Foo.prototype with PRIVATE property.`
 *
 * @override
 * @private
 */
app.Bar.prototype.explicitPublic = function() {
  return 'explicitPublic!';
};

/**
 * No warnings
 *
 * @override
 * @private
 */
app.Bar.prototype.implicitPublic = function() {
  return 'implicitPublic!';
};
