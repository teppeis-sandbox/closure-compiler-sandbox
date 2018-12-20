goog.require('app.Bar');
goog.require('app.Foo');

// WARNING - Access to private property implicitPublic of app.Bar not allowed here.
alert((new app.Bar()).implicitPublic());
// WARNING - Access to private property explicitPublic of app.Bar not allowed here.
alert((new app.Bar()).explicitPublic());
