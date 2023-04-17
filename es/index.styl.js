var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  width: 100%;\n'], ['\n  position: relative;\n  width: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  position: relative;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  display: block;\n  background: none;\n  border: none;\n  outline: none;\n  resize: none;\n  font: inherit;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  /* we only want overlay text visible */\n  /* need to do this so caret still shows up */\n  color: inherit;\n  -webkit-text-fill-color: transparent;\n  ::placeholder {\n    ', '\n    -webkit-text-fill-color: initial;\n  }\n'], ['\n  display: block;\n  background: none;\n  border: none;\n  outline: none;\n  resize: none;\n  font: inherit;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  /* we only want overlay text visible */\n  /* need to do this so caret still shows up */\n  color: inherit;\n  -webkit-text-fill-color: transparent;\n  ::placeholder {\n    ', '\n    -webkit-text-fill-color: initial;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  display: block;\n  background: none;\n  border: none;\n  outline: none;\n  resize: none;\n  font: inherit;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  padding: inherit;\n\n  ', '\n\n  /* reversed from Input above */\n  -webkit-text-fill-color: initial;\n'], ['\n  display: block;\n  background: none;\n  border: none;\n  outline: none;\n  resize: none;\n  font: inherit;\n  width: 100%;\n  padding: 0;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  padding: inherit;\n\n  ', '\n\n  /* reversed from Input above */\n  -webkit-text-fill-color: initial;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  '], ['\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  ']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  font: inherit;\n'], ['\n  font: inherit;\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  position: relative;\n  cursor: pointer;\n  font-weight: 500;\n\n  ', '\n\n  ', '\n  ', '\n'], ['\n  position: relative;\n  cursor: pointer;\n  font-weight: 500;\n\n  ', '\n\n  ', '\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'react-emotion';
import Textarea from 'react-textarea-autosize';
import clean from 'clean-element';

import { style, propTypes, space, width, color, borders, borderColor, borderRadius, boxShadow, fontSize, fontWeight, fontFamily, lineHeight, textAlign, letterSpacing } from 'styled-system';

export var Container = styled('div')(_templateObject);

export var InputContainer = styled('div')(_templateObject2, space, width, borders, borderColor, borderRadius, boxShadow, color, fontSize, fontWeight, fontFamily, lineHeight, letterSpacing, textAlign);

InputContainer.defaultProps = {
  bg: '#FFFFFF',
  color: '#505050',
  border: '1px solid rgba(0, 0, 0, .1)',
  fontFamily: 'monospace'
};

var CleanInput = clean(Textarea);

CleanInput.propTypes = _extends({
  placeholderColor: propTypes.color.color
}, propTypes.lineHeight, propTypes.borderRadius);

var placeholderColor = style({
  prop: 'placeholderColor',
  cssProperty: 'color',
  key: 'colors'
});

export var Input = styled(CleanInput)(_templateObject3, placeholderColor);

Input.defaultProps = {
  lineHeight: '1.1rem',
  placeholderColor: '#D7D7D7'
};

export var Overlay = styled('div')(_templateObject4, function (props) {
  return props.collapsed && css(_templateObject5);
});

export var Inline = styled('span')(_templateObject6);

var tokenColor = style({
  prop: 'tokenColor',
  cssProperty: 'color',
  key: 'colors'
});

// const tokenUnderline = style({
//   prop: 'tokenColor',
//   cssProperty: 'backgroundColor',
//   key: 'colors'
// })

export var Token = styled(Inline)(_templateObject7, tokenColor, '' /* &:after {
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