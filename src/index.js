goog.provide('myapp.start');

goog.require('goog.array');
goog.require('goog.html.sanitizer.HtmlSanitizer');

alert(goog.array.filter([1,2,3], (item) => item > 2));
new goog.html.sanitizer.HtmlSanitizer();
