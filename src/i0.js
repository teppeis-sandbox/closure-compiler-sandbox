/** @constructor */
function Hello() {}

/**
 * @param {string} msg
 */
Hello.prototype.hello = function(msg) {
  alert(msg);
};

module.exports = Hello;
