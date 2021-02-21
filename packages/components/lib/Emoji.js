'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  );
}

var StyledEmoji = _styledComponents.default.span(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  display: inline-block;\n  width: ',
      ';\n  height: ',
      ';\n  margin: ',
      ';\n',
    ])),
  function (_ref) {
    var width = _ref.width;
    return width && width;
  },
  function (_ref2) {
    var height = _ref2.height;
    return height && height;
  },
  function (_ref3) {
    var margin = _ref3.margin;
    return margin && margin;
  },
);

var propTypes = {
  alt: _propTypes.string.isRequired,
  ariaLabel: _propTypes.string.isRequired,
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.func,
    _propTypes.object,
    _propTypes.array,
  ]).isRequired,
};

var Emoji = function Emoji(_ref4) {
  var alt = _ref4.alt,
    ariaLabel = _ref4.ariaLabel,
    children = _ref4.children,
    props = _objectWithoutProperties(_ref4, ['alt', 'ariaLabel', 'children']);

  return /*#__PURE__*/ _react.default.createElement(
    StyledEmoji,
    _extends(
      {
        role: 'img',
        alt: alt,
        'aria-label': ariaLabel,
      },
      props,
    ),
    children,
  );
};

Emoji.propTypes = propTypes;
var _default = Emoji;
exports.default = _default;
