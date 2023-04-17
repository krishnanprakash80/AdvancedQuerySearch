'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compare = require('../utils/compare');

var _token = require('../utils/token');

var _dropdown = require('./dropdown.styl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (_temp = _class = function (_PureComponent) {
  _inherits(_default, _PureComponent);

  function _default(props) {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.handleEnterKey = _this.handleEnterKey.bind(_this);
    _this.handleEscKey = _this.handleEscKey.bind(_this);
    _this.handleArrowKeys = _this.handleArrowKeys.bind(_this);
    _this.adjustListScroll = _this.adjustListScroll.bind(_this);
    _this.getAttribute = _this.getAttribute.bind(_this);
    _this.getSuggestions = _this.getSuggestions.bind(_this);
    _this.getSuggestionAddons = _this.getSuggestionAddons.bind(_this);
    _this.filterSuggestions = _this.filterSuggestions.bind(_this);
    _this.acceptSuggestion = _this.acceptSuggestion.bind(_this);
    _this.getOperators = _this.getOperators.bind(_this);
    _this.setOperator = _this.setOperator.bind(_this);
    _this.state = {
      suggestions: [],
      highlightedIdx: 0,
      selectedIdx: null,
      prepended: '',
      operator: '',
      negated: false
    };
    return _this;
  }

  _default.prototype.componentDidMount = function componentDidMount() {
    this.filterSuggestions(this.props.value);
    this.props.keyboardHelpers && document.addEventListener('keydown', this.onKeyDown, false);
  };

  _default.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.keyboardHelpers && document.removeEventListener('keydown', this.onKeyDown, false);
  };

  _default.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.filterSuggestions(nextProps.value);
    }
  };

  _default.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.suggestions.length === 0) {
      this.props.onClose();
    }
  };

  _default.prototype.onKeyDown = function onKeyDown(evt) {
    switch (evt.keyCode) {
      case 9: // tab key
      case 13:
        // enter key
        this.handleEnterKey(evt);
        break;
      case 27:
        // esc key
        this.handleEscKey(evt);
        break;
      case 38: // up key
      case 40:
        // down key
        this.handleArrowKeys(evt, evt.keyCode);
        break;
    }
  };

  _default.prototype.handleEnterKey = function handleEnterKey(evt) {
    evt.preventDefault();
    this.acceptSuggestion();
  };

  _default.prototype.handleEscKey = function handleEscKey(evt) {
    evt.preventDefault();
    this.props.onClose(true);
  };

  _default.prototype.handleArrowKeys = function handleArrowKeys(evt, keyCode) {
    evt.preventDefault();

    var highlightedIdx = this.state.highlightedIdx;

    var isDownKey = keyCode === 40;

    // the furthest down it can go before wrapping
    var max = this.state.suggestions.length - 1;

    // determine the next position
    var newIdx = highlightedIdx !== null ? isDownKey ? highlightedIdx + 1 : highlightedIdx - 1 : isDownKey ? 0 : max;

    this.setState({
      // make sure it doesn't go out of bounds by resetting to opposite side
      highlightedIdx: isDownKey ? newIdx <= max ? newIdx : 0 : newIdx >= 0 ? newIdx : max
    }, this.adjustListScroll);
  };

  _default.prototype.adjustListScroll = function adjustListScroll() {
    var _selected = this._selected,
        offsetTop = _selected.offsetTop,
        selectorHeight = _selected.clientHeight;
    var _list = this._list,
        scrollTop = _list.scrollTop,
        listHeight = _list.clientHeight;


    var topWaypoint = selectorHeight;
    var bottomWaypoint = listHeight - selectorHeight;
    var position = offsetTop - scrollTop;

    if (position > bottomWaypoint) {
      this._list.scrollTop += selectorHeight + (position - bottomWaypoint);
    } else if (position < topWaypoint) {
      this._list.scrollTop = offsetTop - selectorHeight + (position - topWaypoint);
    }
  };

  _default.prototype.getAttribute = function getAttribute(selectedIdx) {
    if (selectedIdx !== null && selectedIdx > -1) {
      return this.props.attributes[selectedIdx];
    }
  };

  _default.prototype.getSuggestions = function getSuggestions(attribute) {
    var _props = this.props,
        nameKey = _props.nameKey,
        attributes = _props.attributes;


    return attribute ? attribute.enumerations || [] : attributes.map(function (attr) {
      return attr[nameKey];
    });
  };

  _default.prototype.getSuggestionAddons = function getSuggestionAddons(attribute, parsed) {
    var addons = [];

    if (attribute) {
      if (!parsed.wildcard && !attribute.enumerations && parsed.attributeValue && attribute.type === 'string') {
        addons.push('"' + parsed.attributeValue + '"');
      }

      if (parsed.attributeValue && attribute.type === 'string') {
        parsed.quoted && !attribute.enumerations ? addons.push('"' + parsed.attributeValue + '*"') : addons.push(parsed.attributeValue + '*');
      }
    }

    return addons;
  };

  _default.prototype.filterSuggestions = function filterSuggestions(value) {
    var _props2 = this.props,
        nameKey = _props2.nameKey,
        attributes = _props2.attributes;


    var parsed = (0, _token.parseToken)(value);

    var hasAttributeName = parsed.attributeName && value.indexOf(':') > -1;
    var selectedIdx = hasAttributeName ? attributes.findIndex(function (attr) {
      return attr[nameKey] === parsed.attributeName;
    }) : -1;

    var attribute = this.getAttribute(selectedIdx);
    var suggestions = this.getSuggestions(attribute);
    var searchValue = selectedIdx > -1 ? parsed.attributeValue : parsed.attributeName;

    var filtered = suggestions.filter(function (v) {
      return (0, _compare.compareFuzzy)(searchValue, v);
    }).concat(this.getSuggestionAddons(attribute, parsed));

    this.setState({
      selectedIdx: selectedIdx,
      prepended: parsed.prepended,
      operator: parsed.operator,
      negated: parsed.negated,
      suggestions: filtered,
      highlightedIdx: 0
    });
  };

  _default.prototype.acceptSuggestion = function acceptSuggestion() {
    var _props3 = this.props,
        nameKey = _props3.nameKey,
        onSelect = _props3.onSelect;
    var _state = this.state,
        suggestions = _state.suggestions,
        highlightedIdx = _state.highlightedIdx,
        selectedIdx = _state.selectedIdx,
        prepended = _state.prepended,
        operator = _state.operator;


    var attribute = this.getAttribute(selectedIdx);
    var suggestion = suggestions[highlightedIdx];

    var newValue = attribute ? attribute[nameKey] + ':' + operator + suggestion : suggestion;

    var appended = selectedIdx === -1 ? ':' : '';
    onSelect('' + prepended + newValue, appended);
  };

  _default.prototype.getOperators = function getOperators() {
    var operators = [];
    var attribute = this.getAttribute(this.state.selectedIdx);

    if (attribute) {
      switch (attribute.type) {
        case 'int':
        case 'float':
          operators.push({ name: 'GT', char: '>', active: this.state.operator === '>' });
          operators.push({ name: 'LT', char: '<', active: this.state.operator === '<' });
          operators.push({ name: 'GTE', char: '>=', active: this.state.operator === '>=' });
          operators.push({ name: 'LTE', char: '<=', active: this.state.operator === '<=' });
          break;
      }
    }

    return operators;
  };

  _default.prototype.setOperator = function setOperator(newOperator) {
    var value = this.props.value;
    var _state2 = this.state,
        negated = _state2.negated,
        operator = _state2.operator;


    if (newOperator === '-') {
      var newValue = value.replace(/^-?(.*)/, (negated ? '' : '-') + '$1');

      this.props.onSelect(newValue);
    } else {
      var token = (0, _token.parseToken)(value);
      token.operator = operator === newOperator ? '' : newOperator;

      this.props.onSelect((0, _token.serializeToken)(token));
    }
  };

  _default.prototype.render = function render() {
    var _this2 = this;

    var Footer = this.props.footerComponent;

    return _react2.default.createElement(
      _dropdown.Container,
      _extends({
        left: this.props.offsetX || 0,
        top: this.props.offsetY || 0
      }, this.props.dropdownProps),
      _react2.default.createElement(
        _dropdown.Suggestions,
        _extends({}, this.props.listProps, {
          innerRef: function innerRef(ref) {
            return _this2._list = ref;
          } }),
        this.state.suggestions.map(function (suggestion, key) {
          var isActive = _this2.state.highlightedIdx === key;

          return _react2.default.createElement(
            _dropdown.Suggestion,
            _extends({
              key: key,
              active: isActive,
              onClick: _this2.acceptSuggestion,
              onMouseOver: function onMouseOver() {
                return _this2.setState({ highlightedIdx: key });
              },
              innerRef: isActive ? function (ref) {
                return _this2._selected = ref;
              } : undefined
            }, _this2.props.selectorProps),
            suggestion
          );
        })
      ),
      _react2.default.createElement(
        _dropdown.Operators,
        null,
        _react2.default.createElement(
          _dropdown.OperatorLone,
          {
            active: this.state.negated,
            onClick: function onClick() {
              return _this2.setOperator('-');
            } },
          _react2.default.createElement(
            _dropdown.Key,
            null,
            '-'
          ),
          'NEGATE'
        ),
        this.getOperators().map(function (operator, key) {
          return _react2.default.createElement(
            _dropdown.Operator,
            {
              key: key,
              active: operator.active,
              onClick: function onClick() {
                return _this2.setOperator(operator.char);
              } },
            _react2.default.createElement(
              _dropdown.Key,
              null,
              operator.char
            ),
            operator.name
          );
        })
      ),
      this.props.keyboardHelpers && _react2.default.createElement(
        _dropdown.Section,
        { center: true },
        _react2.default.createElement(
          _dropdown.Helper,
          null,
          _react2.default.createElement(
            _dropdown.KeyOutline,
            null,
            '\u25B2'
          ),
          _react2.default.createElement(
            _dropdown.KeyOutline,
            null,
            '\u25BC'
          ),
          'to navigate'
        ),
        _react2.default.createElement(
          _dropdown.Helper,
          null,
          _react2.default.createElement(
            _dropdown.KeyOutline,
            { long: true },
            '\u21B5'
          ),
          'to select'
        )
      ),
      _react2.default.createElement(Footer, null)
    );
  };

  return _default;
}(_react.PureComponent), _class.propTypes = { // eslint-disable-line
  value: _propTypes2.default.string,
  nameKey: _propTypes2.default.string,
  attributes: _propTypes2.default.array,
  onSelect: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  offsetX: _propTypes2.default.number,
  offsetY: _propTypes2.default.number,
  keyboardHelpers: _propTypes2.default.bool,
  footerComponent: _propTypes2.default.func,
  dropdownProps: _propTypes2.default.object,
  selectorProps: _propTypes2.default.object,
  listProps: _propTypes2.default.object
}, _class.defaultProps = { // eslint-disable-line
  value: '',
  nameKey: 'name',
  onSelect: function onSelect() {},
  onClose: function onClose() {},
  keyboardHelpers: true,
  footerComponent: function footerComponent() {
    return null;
  }
}, _temp);

exports.default = _default;
module.exports = exports['default'];