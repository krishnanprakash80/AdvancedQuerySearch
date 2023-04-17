'use strict';

exports.__esModule = true;
exports.Token = exports.Inline = exports.Overlay = exports.Input = exports.InputContainer = exports.Container = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  width: 100%;\n'], ['\n  position: relative;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  position: relative;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: block;\n  background: none;\n  border: none;\n  outline: none;\n  resize: none;\n  font: inherit;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  /* we only want overlay text visible */\n  /* need to do this so caret still shows up */\n  color: inherit;\n  -webkit-text-fill-color: transparent;\n  ::placeholder {\n    ', '\n    -webkit-text-fill-color: initial;\n  }\n'], ['\n  display: block;\n  background: none;\n  border: none;\n  outline: none;\n  resize: none;\n  font: inherit;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  /* we only want overlay text visible */\n  /* need to do this so caret still shows up */\n  color: inherit;\n  -webkit-text-fill-color: transparent;\n  ::placeholder {\n    ', '\n    -webkit-text-fill-color: initial;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  display: block;\n  background: none;\n  border: none;\n  outline: none;\n  resize: none;\n  font: inherit;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  padding: inherit;\n\n  ', '\n\n  /* reversed from Input above */\n  -webkit-text-fill-color: initial;\n'], ['\n  display: block;\n  background: none;\n  border: none;\n  outline: none;\n  resize: none;\n  font: inherit;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  padding: inherit;\n\n  ', '\n\n  /* reversed from Input above */\n  -webkit-text-fill-color: initial;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  '], ['\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  ']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  font: inherit;\n'], ['\n  font: inherit;\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  cursor: pointer;\n  font-weight: 500;\n\n  ', '\n\n  ', '\n  ', '\n'], ['\n  position: relative;\n  cursor: pointer;\n  font-weight: 500;\n\n  ', '\n\n  ', '\n  ', '\n']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactTextareaAutosize = require('react-textarea-autosize');

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

var _cleanElement = require('clean-element');

var _cleanElement2 = _interopRequireDefault(_cleanElement);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Container = exports.Container = (0, _reactEmotion2.default)('div')(_templateObject);

var InputContainer = exports.InputContainer = (0, _reactEmotion2.default)('div')(_templateObject2, _styledSystem.space, _styledSystem.width, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius, _styledSystem.boxShadow, _styledSystem.color, _styledSystem.fontSize, _styledSystem.fontWeight, _styledSystem.fontFamily, _styledSystem.lineHeight, _styledSystem.letterSpacing, _styledSystem.textAlign);

InputContainer.defaultProps = {
  bg: '#FFFFFF',
  color: '#505050',
  border: '1px solid rgba(0, 0, 0, .1)',
  fontFamily: 'monospace'
};

var CleanInput = (0, _cleanElement2.default)(_reactTextareaAutosize2.default);

CleanInput.propTypes = _extends({
  placeholderColor: _styledSystem.propTypes.color.color
}, _styledSystem.propTypes.lineHeight, _styledSystem.propTypes.borderRadius);

var placeholderColor = (0, _styledSystem.style)({
  prop: 'placeholderColor',
  cssProperty: 'color',
  key: 'colors'
});

var Input = exports.Input = (0, _reactEmotion2.default)(CleanInput)(_templateObject3, placeholderColor);

Input.defaultProps = {
  lineHeight: '1.1rem',
  placeholderColor: '#D7D7D7'
};

var Overlay = exports.Overlay = (0, _reactEmotion2.default)('div')(_templateObject4, function (props) {
  return props.collapsed && (0, _reactEmotion.css)(_templateObject5);
});

var Inline = exports.Inline = (0, _reactEmotion2.default)('span')(_templateObject6);

var tokenColor = (0, _styledSystem.style)({
  prop: 'tokenColor',
  cssProperty: 'color',
  key: 'colors'
});

// const tokenUnderline = style({
//   prop: 'tokenColor',
//   cssProperty: 'backgroundColor',
//   key: 'colors'
// })

var Token = exports.Token = (0, _reactEmotion2.default)(Inline)(_templateObject7, tokenColor, '' /* &:after {
                                                                                                 content: '';
                                                                                                 position: absolute;
                                                                                                 top: 100%;
                                                                                                 left: 0;
                                                                                                 right: 0;
                                                                                                 height: 1px;
                                                                                                 opacity: 0;
                                                                                                 transform: translateY(3px);
                                                                                                 transition: all 150ms;
                                                                                                 ${tokenUnderline}
                                                                                                 } */, '' /* &:hover:after {
                                                                                                          opacity: 1;
                                                                                                          transform: translateY(0px);
                                                                                                          } */);

Token.defaultProps = {
  tokenColor: '#2384FF'
};