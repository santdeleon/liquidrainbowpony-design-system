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

var StyledNav = _styledComponents.default.nav(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  display: flex;\n  align-items: ',
      ';\n  justify-content: ',
      ';\n  padding: ',
      ';\n  margin: ',
      ';\n',
    ])),
  function (_ref) {
    var align = _ref.align;
    return align ? align : 'center';
  },
  function (_ref2) {
    var justify = _ref2.justify;
    return justify ? justify : 'flex-start';
  },
  function (_ref3) {
    var padding = _ref3.padding;
    return padding && padding;
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
);

var propTypes = {
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.object,
    _propTypes.array,
    _propTypes.func,
  ]),
};

var Nav = function Nav(_ref5) {
  var children = _ref5.children,
    props = _objectWithoutProperties(_ref5, ['children']);

  return /*#__PURE__*/ _react.default.createElement(
    StyledNav,
    _extends(
      {
        role: 'navigation',
      },
      props,
    ),
    children,
  );
};

Nav.propTypes = propTypes;
var _default = Nav;
exports.default = _default;
