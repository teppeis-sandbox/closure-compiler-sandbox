### How to build

```console
$ npm install
$ npm run build
```

### Output

```
src/bar.js:17: WARNING - Overriding PUBLIC property of app.Foo.prototype with PRIVATE property.
app.Bar.prototype.explicitPublic = function() {
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

src/index.js:5: WARNING - Access to private property implicitPublic of app.Bar not allowed here.
alert((new app.Bar()).implicitPublic());
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

src/index.js:7: WARNING - Access to private property explicitPublic of app.Bar not allowed here.
alert((new app.Bar()).explicitPublic());
      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

0 error(s), 3 warning(s), 100.0% typed
```
