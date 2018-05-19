Repro for https://github.com/google/closure-compiler/issues/2935

### How to build

```console
$ npm install
$ npm run build
```

```
src/index.js:22: WARNING - actual parameter 1 of Test does not match formal parameter
found   : (number|undefined)
required: number
Test(Required(a))
     ^^^^^^^^^^^

0 error(s), 1 warning(s), 86.6% typed
```
