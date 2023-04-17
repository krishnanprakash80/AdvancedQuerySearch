'use strict';

exports.__esModule = true;
exports.Helper = exports.KeyOutline = exports.Key = exports.OperatorLone = exports.Operator = exports.Operators = exports.Suggestion = exports.Suggestions = exports.Section = exports.Container = exports.swingDown = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  0% {\n    opacity: 0;\n    transform: perspective(50em) rotateX(-30deg);\n  }\n  100% {\n    opacity: 1;\n    transform: perspective(50em) rotateX(0deg);\n  }\n'], ['\n  0% {\n    opacity: 0;\n    transform: perspective(50em) rotateX(-30deg);\n  }\n  100% {\n    opacity: 1;\n    transform: perspective(50em) rotateX(0deg);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  position: absolute;\n  z-index: 10;\n  transform-origin: 50% 0;\n  animation: ', ' ease-in-out 250ms;\n  transition: top 100ms, left 100ms;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: inline-block;\n  position: absolute;\n  z-index: 10;\n  transform-origin: 50% 0;\n  animation: ', ' ease-in-out 250ms;\n  transition: top 100ms, left 100ms;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  padding: 15px;\n  text-align: ', ';\n  :not(:last-child) {\n    border-bottom: 1px solid rgba(255, 255, 255, .15);\n  }\n'], ['\n  padding: 15px;\n  text-align: ', ';\n  :not(:last-child) {\n    border-bottom: 1px solid rgba(255, 255, 255, .15);\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  list-style-type: none;\n  line-height: 20px;\n  margin: 10px 0;\n  overflow: auto;\n\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  list-style-type: none;\n  line-height: 20px;\n  margin: 10px 0;\n  overflow: auto;\n\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  cursor: pointer;\n  border: 1px solid transparent;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n'], ['\n  cursor: pointer;\n  border: 1px solid transparent;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ', '\n  ', '\n\n  ', '\n  ', '\n  ', '\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  padding: 15px 0;\n'], ['\n  padding: 15px 0;\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  background: ', ';\n  font-weight: 500;\n  line-height: 18px;\n  padding: 5px 10px;\n  cursor: pointer;\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n'], ['\n  display: inline-block;\n  background: ', ';\n  font-weight: 500;\n  line-height: 18px;\n  padding: 5px 10px;\n  cursor: pointer;\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  display: block;\n  margin-bottom: 5px;\n'], ['\n  display: block;\n  margin-bottom: 5px;\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n  min-width: 20px;\n  text-align: center;\n  vertical-align: middle;\n  padding: 2px 5px;\n  margin-right: 5px;\n'], ['\n  display: inline-block;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 2px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 18px;\n  min-width: 20px;\n  text-align: center;\n  vertical-align: middle;\n  padding: 2px 5px;\n  margin-right: 5px;\n']),
    _templateObject10 = _taggedTemplateLiteralLoose(['\n  background: none;\n  border: 1px solid ', ';\n  color: ', ';\n  font-size: 8px;\n  padding: 0;\n  width: ', ';\n  height: 18px;\n'], ['\n  background: none;\n  border: 1px solid ', ';\n  color: ', ';\n  font-size: 8px;\n  padding: 0;\n  width: ', ';\n  height: 18px;\n']),
    _templateObject11 = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n  opacity: 0.5;\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n'], ['\n  display: inline-block;\n  opacity: 0.5;\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var swingDown = exports.swingDown = (0, _reactEmotion.keyframes)(_templateObject);

var Container = exports.Container = (0, _reactEmotion2.default)('aside')(_templateObject2, swingDown, _styledSystem.top, _styledSystem.left, _styledSystem.color, _styledSystem.boxShadow, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius, _styledSystem.space, _styledSystem.width, _styledSystem.minWidth, _styledSystem.fontSize, _styledSystem.fontWeight, _styledSystem.fontFamily, _styledSystem.lineHeight, _styledSystem.letterSpacing);

Container.defaultProps = {
  bg: '#555555',
  boxShadow: '0 4px 10px rgba(0, 0, 0, .25)',
  color: '#FFFFFF',
  minWidth: '280px'
};

var Section = exports.Section = (0, _reactEmotion2.default)('section')(_templateObject3, function (props) {
  return props.center ? 'center' : 'inherit';
});

var Suggestions = exports.Suggestions = (0, _reactEmotion2.default)('ul')(_templateObject4, _styledSystem.space, _styledSystem.color, _styledSystem.borders, _styledSystem.maxHeight);

Suggestions.defaultProps = {
  maxHeight: '200px'
};

var Suggestion = exports.Suggestion = (0, _reactEmotion2.default)('li')(_templateObject5, _styledSystem.space, _styledSystem.maxWidth, function (props) {
  return props.active && _styledSystem.color;
}, function (props) {
  return props.active && _styledSystem.borders;
}, function (props) {
  return props.active && _styledSystem.borderColor;
});

Suggestion.defaultProps = {
  bg: '#FFFFFF',
  color: '#000000',
  p: '3px 15px',
  maxWidth: '320px'
};

var Operators = exports.Operators = (0, _reactEmotion2.default)(Section)(_templateObject6);

var Operator = exports.Operator = (0, _reactEmotion2.default)('div')(_templateObject7, function (props) {
  return props.active ? 'rgba(255, 255, 255, 0.2)' : 'none';
});

var OperatorLone = exports.OperatorLone = (0, _reactEmotion2.default)(Operator)(_templateObject8);

var Key = exports.Key = (0, _reactEmotion2.default)('div')(_templateObject9);

var KeyOutline = exports.KeyOutline = (0, _reactEmotion2.default)(Key)(_templateObject10, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.long ? '36px' : '18px';
});

var Helper = exports.Helper = (0, _reactEmotion2.default)('div')(_templateObject11);