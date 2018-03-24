// Pretty print objects for logging.
const prettyjson = require('prettyjson');

module.exports = function logObject(message, object, options) {
    console.log(message);
    console.log(prettyjson.render(object, options));
}