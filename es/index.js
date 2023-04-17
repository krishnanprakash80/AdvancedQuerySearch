var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PageClick from 'react-page-click';
import { extractTokens } from './utils/token';
import Dropdown from './components/dropdown';

import { Container, InputContainer, Input, Overlay, Inline, Token } from './index.styl';

var _default = (_temp = _class = function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.onAutosuggest = _this.onAutosuggest.bind(_this);
    _this.onSelectValue = _this.onSelectValue.bind(_this);
    _this.handleEnterKey = _this.handleEnterKey.bind(_this);
    _this.shouldAutosuggest = _this.shouldAutosuggest.bind(_this);
    _this.onClose = _this.onClose.bind(_this);
    // this.onClickToken = this.onClickToken.bind(this)
    _this.extract = _this.extract.bind(_this);
    _this.getCurrentChunk = _this.getCurrentChunk.bind(_this);
    _this.buildOverlay = _this.buildOverlay.bind(_this);
    _this.state = {
      focused: false,
      value: props.defaultValue,
      attributes: props.data,
      overlayComponents: [],
      dropdownClosed: false,
      dropdownOpen: false,
      dropdownValue: null,
      dropdownX: null,
      dropdownY: null
    };
    return _this;
  }

  _default.prototype.componentDidMount = function componentDidMount() {
    this.setState({
      overlayComponents: this.buildOverlay(this.state.value)
    });
  };

  _default.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _state = this.state,
        value = _state.value,
        attributes = _state.attributes;


    if (value !== prevState.value) {
      this.props.onChange(value);
    }

    if (value !== prevState.value || attributes.length !== prevState.attributes.length) {
      this.setState({
        overlayComponents: this.buildOverlay(value)
      }, this.onAutosuggest);
    }
  };

  _default.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var newState = {};

    // default value can be empty string (to clear search)
    if (nextProps.defaultValue !== undefined) {
      newState.value = nextProps.defaultValue;
    }

    if (nextProps.data) {
      newState.attributes = nextProps.data;
    }

    this.setState(newState);
  };

  _default.prototype.onFocus = function onFocus(evt) {
    this.setState({
      focused: true
    }, this.onAutosuggest);
  };

  _default.prototype.onBlur = function onBlur(evt) {
    this.setState({
      focused: false
    });
  };

  _default.prototype.onKeyDown = function onKeyDown(evt) {
    if (evt.keyCode === 13) {
      this.handleEnterKey(evt);
    }

    // close dropdown if navigating with arrow keys
    if (evt.keyCode === 37 || evt.keyCode === 39) {
      this.onClose();
    }
  };

  _default.prototype.onChange = function onChange(evt) {
    this.setState({
      value: evt.target.value
    });
  };

  _default.prototype.onAutosuggest = function onAutosuggest() {
    var value = this.state.value;
    var _marker = this._marker,
        offsetLeft = _marker.offsetLeft,
        offsetTop = _marker.offsetTop;

    var _getCurrentChunk = this.getCurrentChunk(value),
        chunk = _getCurrentChunk.chunk;

    var suggest = this.shouldAutosuggest(chunk);

    if (suggest) {
      this.setState({
        dropdownClosed: false,
        dropdownOpen: true,
        dropdownValue: chunk,
        dropdownX: offsetLeft,
        dropdownY: offsetTop + 25 // line height + 5 extra padding
      });
    } else {
      this.setState({
        dropdownOpen: false
      });
    }
  };

  _default.prototype.onSelectValue = function onSelectValue(chunk) {
    var _this2 = this;

    var appended = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var value = this.state.value;

    var _getCurrentChunk2 = this.getCurrentChunk(value),
        index = _getCurrentChunk2.index,
        indexEnd = _getCurrentChunk2.indexEnd;

    var before = value.slice(0, index);
    var after = value.slice(indexEnd);
    var position = index + chunk.length + appended.length;
    // const positionEnd = position + after.length

    this.setState({
      value: '' + before + chunk + appended + after,
      dropdownClosed: appended !== ':'
    }, function () {
      // position caret at the end of the inserted value
      _this2._input.focus();
      _this2._input.setSelectionRange(position, position);
    });
  };

  _default.prototype.handleEnterKey = function handleEnterKey(evt) {
    // whether this input is infocus
    var isFocused = document.activeElement === this._input;

    // submit on enter, line break on shift enter
    // dropdown handles enter key globally, so prevent clash
    if (!evt.shiftKey && isFocused && !this.state.dropdownOpen) {
      evt.preventDefault();
      this.props.onSubmit(this.state.value);
    }
  };

  _default.prototype.shouldAutosuggest = function shouldAutosuggest(chunk) {
    var selectionStart = this._input.selectionStart;
    var _state2 = this.state,
        value = _state2.value,
        focused = _state2.focused;

    // next character is whitespace, closing paren or null

    var nextCharIsEmpty = !value.charAt(selectionStart) || /[)\s]/.test(value.charAt(selectionStart));

    // whitespace/negation/paren before and whitespace after caret
    var isNewWord = nextCharIsEmpty && /[\s-(]/.test(value.charAt(selectionStart - 1));

    // cursor is at end of the current word
    var atEndOfWord = nextCharIsEmpty && /[^)\s]/.test(value.charAt(selectionStart - 1));

    return focused && (!value || isNewWord || atEndOfWord && !this.state.dropdownClosed);
  };

  _default.prototype.onClose = function onClose(forWord) {
    this.setState({
      dropdownOpen: false,
      // don't reopen if it was closed for current word
      dropdownClosed: forWord || false
    });
  };

  // onClickToken (start, end) {
  //   // move cursor to end of token
  //   this._input.focus()
  //   this._input.setSelectionRange(end, end)
  // }

  _default.prototype.extract = function extract(value) {
    var nameKeyIncludes = this.props.nameKeyIncludes;
    var attributes = this.state.attributes;


    return extractTokens(value, attributes, nameKeyIncludes);
  };

  _default.prototype.getCurrentChunk = function getCurrentChunk(value) {
    var selectionStart = this._input.selectionStart;

    // get location of each token found in value

    var tokens = this.extract(value);

    // find index of the closest previous whitespace
    var prevStr = value.substring(0, selectionStart);
    var prevMatch = prevStr.match(/[^\s]*$/);
    var prevIdx = prevMatch ? prevStr.lastIndexOf(prevMatch[prevMatch.length - 1]) : -1;

    // determine correct index for the start of the chunk
    var index = prevIdx;
    for (var _iterator = tokens.reverse(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var _ref = _ref2;
      var start = _ref[0];
      var end = _ref[1];

      // token is between whitespace and cursor
      if (selectionStart > end && prevIdx < start) {
        index = end;
        break;
      }
      // at the end of or inside a token (thats what she said)
      if (selectionStart > start && selectionStart <= end) {
        index = start;
        break;
      }
      // there is whitespace in the token
      if (prevIdx > start && prevIdx < end) {
        index = end;
        break;
      }
    }

    // value is result of cursor back to beginning of chunk
    var chunk = value.substring(index, selectionStart);
    var indexEnd = index + chunk.length;

    return {
      index: index,
      indexEnd: indexEnd,
      chunk: chunk
    };
  };

  _default.prototype.buildTokens = function buildTokens(value) {
    var _this3 = this;

    var relativeToIdx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var chunks = [];
    var positions = this.extract(value);

    var currentPosition = 0;
    positions.reduce(function (prev, next) {
      // const startIdx = next[0] + relativeToIdx
      // const endIdx = next[1] + relativeToIdx

      chunks.push(value.substring(prev[1], next[0]));
      chunks.push(React.createElement(
        Token,
        {
          key: 'token-' + next[0],
          tokenColor: _this3.props.inputProps.tokenColor },
        value.substring(next[0], next[1])
      ));

      currentPosition = next[1];
      return next;
    }, [null, 0]);

    chunks.push(value.substring(currentPosition));
    return chunks.filter(Boolean);
  };

  _default.prototype.buildOverlay = function buildOverlay(value) {
    var _this4 = this;

    // figure out where we should split the overlay,
    // so we know where to position the dropdown
    var _getCurrentChunk3 = this.getCurrentChunk(value),
        index = _getCurrentChunk3.index;

    // everything to the left of the current word/token


    var stuffOnLeft = this.buildTokens(value.substring(0, index));

    // everything to the right of the current word/token
    // need to have default whitespace or dropdown will not find position of caret
    var stuffOnRight = this.buildTokens(value.substring(index) || ' ', index);

    // since it will never split up a token,
    // we can build each side of cursor independently
    return [stuffOnLeft, React.createElement(
      Inline,
      {
        key: 'after-' + index,
        style: { outline: this.props.debug ? '1px solid red' : 'none' },
        innerRef: function innerRef(ref) {
          return _this4._marker = ref;
        } },
      stuffOnRight
    )];
  };

  _default.prototype.render = function render() {
    var _this5 = this;

    var _props = this.props,
        nameKey = _props.nameKey,
        className = _props.className,
        inputProps = _props.inputProps,
        placeholder = _props.placeholder,
        keyboardHelpers = _props.keyboardHelpers,
        collapseOnBlur = _props.collapseOnBlur,
        footerComponent = _props.footerComponent,
        dropdownProps = _props.dropdownProps,
        selectorProps = _props.selectorProps,
        listProps = _props.listProps;
    var _state3 = this.state,
        value = _state3.value,
        attributes = _state3.attributes,
        dropdownOpen = _state3.dropdownOpen,
        dropdownValue = _state3.dropdownValue,
        dropdownX = _state3.dropdownX,
        dropdownY = _state3.dropdownY,
        overlayComponents = _state3.overlayComponents;


    var collapsed = !this.state.focused && collapseOnBlur;

    return React.createElement(
      PageClick,
      {
        outsideOnly: true,
        notify: this.onClose },
      React.createElement(
        Container,
        {
          className: className },
        React.createElement(
          InputContainer,
          _extends({}, inputProps, {
            onClick: function onClick() {
              return _this5._input.focus();
            } }),
          React.createElement(
            Overlay,
            {
              collapsed: collapsed },
            overlayComponents
          ),
          React.createElement(Input, {
            autoComplete: 'off',
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: 'false',
            autoFocus: inputProps.autoFocus,
            maxRows: collapsed ? 1 : undefined,
            placeholder: placeholder,
            placeholderColor: inputProps.placeholderColor,
            value: value,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: this.onKeyDown,
            onChange: this.onChange,
            inputRef: function inputRef(ref) {
              return _this5._input = ref;
            } })
        ),
        dropdownOpen && React.createElement(Dropdown, {
          keyboardHelpers: keyboardHelpers,
          footerComponent: footerComponent,
          attributes: attributes,
          value: dropdownValue,
          nameKey: nameKey,
          onSelect: this.onSelectValue,
          onClose: this.onClose,
          offsetX: dropdownX,
          offsetY: dropdownY,
          dropdownProps: dropdownProps,
          selectorProps: selectorProps,
          listProps: listProps })
      )
    );
  };

  return _default;
}(Component), _class.propTypes = { // eslint-disable-line
  debug: PropTypes.bool,
  data: PropTypes.array,
  nameKey: PropTypes.string,
  nameKeyIncludes: PropTypes.array,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  keyboardHelpers: PropTypes.bool,
  collapseOnBlur: PropTypes.bool,
  footerComponent: PropTypes.func,
  inputProps: PropTypes.object,
  dropdownProps: PropTypes.object,
  selectorProps: PropTypes.object,
  listProps: PropTypes.object
}, _class.defaultProps = { // eslint-disable-line
  data: [],
  nameKey: 'name',
  nameKeyIncludes: ['name'],
  defaultValue: '',
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  placeholder: 'Search',
  inputProps: {},
  dropdownProps: {},
  selectorProps: {},
  listProps: {}
}, _temp);

export { _default as default };