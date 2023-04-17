'use strict';

exports.__esModule = true;
exports.tokenRegex = tokenRegex;
exports.parseToken = parseToken;
exports.serializeToken = serializeToken;
exports.extractTokens = extractTokens;

var _compare = require('./compare');

function tokenRegex() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var qtfr = opts.partial ? '*' : '+';

  return new RegExp('(?!^|\\(|\\s)*' + // find beginning of token
  '([-]+)?' + // capture prepended negation character
  '([\\w.$]+)' + ( // the attribute name
  '' + (opts.partial ? '?' : '')) + ( // assume it's a token, even with no attribute
  ':' + (opts.partial ? '?' : '')) + // assume it's a token, even with no colon
  '(?!:)' + // make sure colon isn't repeated
  '([><=]*)' + ( // the operators
  '(?:(")(.' + qtfr + '?)(\\*)?"|([^\\s()*"]' + qtfr + '))') + ( // the attribute value, checking for quotes
  '' + (opts.partial ? '?' : '')) + // whether attribute value can be empty
  '(\\*)?' + // capture appended wildcard
  '(?!\\s|\\)|$)*', // find the end of the token
  'g');
}

function parseToken(value) {
  var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var nameKeyIncludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var results = Array.isArray(value) ? value : tokenRegex({ partial: true }).exec(value);

  if (!results || !results.length) {
    return {};
  }

  var tokenData = {
    fullToken: results[0],
    attributeName: results[2],
    attributeNameValid: false,
    attributeValue: results[5] || results[7],
    attributeValueValid: false,
    prepended: results[1] || '',
    operator: results[3],
    negated: results[0].indexOf('-') > -1,
    quoted: Boolean(results[4]),
    wildcard: Boolean(results[6] || results[8])
  };

  if (attributes) {
    var attribute = attributes.find(function (attr) {
      var matchFound = false;
      for (var _iterator = nameKeyIncludes, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var key = _ref;

        if ((0, _compare.compare)(attr[key], tokenData.attributeName)) {
          matchFound = true;
          break;
        }
      }
      return matchFound;
    });

    if (attribute) {
      tokenData.attributeNameValid = true;
      tokenData.attributeValueValid = true;

      if (Array.isArray(attribute.enumerations)) {
        tokenData.attributeValueValid = attribute.enumerations.findIndex(function (v) {
          return (0, _compare.compareFuzzy)(tokenData.attributeValue, v);
        }) > -1;
      }
    }
  }

  return tokenData;
}

function serializeToken(token) {
  var _ref2 = token || {},
      _ref2$prepended = _ref2.prepended,
      prepended = _ref2$prepended === undefined ? '' : _ref2$prepended,
      _ref2$attributeName = _ref2.attributeName,
      attributeName = _ref2$attributeName === undefined ? '' : _ref2$attributeName,
      _ref2$attributeValue = _ref2.attributeValue,
      attributeValue = _ref2$attributeValue === undefined ? '' : _ref2$attributeValue,
      _ref2$operator = _ref2.operator,
      operator = _ref2$operator === undefined ? '' : _ref2$operator;

  return '' + prepended + attributeName + ':' + operator + attributeValue;
}

function extractTokens(value, attributes, nameKeyIncludes) {
  var positions = [];
  var regex = tokenRegex();

  var result = void 0;
  while ((result = regex.exec(value)) !== null) {
    if (attributes) {
      var parsed = parseToken(result, attributes, nameKeyIncludes);

      if (!parsed.attributeNameValid || !parsed.attributeValueValid) {
        continue;
      }
    }

    positions.push([result.index, // start position
    regex.lastIndex // end position
    ]);
  }

  return positions;
}