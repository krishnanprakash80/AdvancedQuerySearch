'use strict';

exports.__esModule = true;
exports.compare = compare;
exports.compareFuzzy = compareFuzzy;

var _escapeStringRegexp = require('escape-string-regexp');

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * case-insensitive comparison
 */
function compare(partialValue, fullValue) {
  return new RegExp('^' + (0, _escapeStringRegexp2.default)(partialValue || '') + '$', 'i').test(fullValue || '');
}

/**
 * case-insensitive comparison (fuzzy)
 */
function compareFuzzy(partialValue, fullValue) {
  return new RegExp((0, _escapeStringRegexp2.default)(partialValue || ''), 'i').test(fullValue || '');
}