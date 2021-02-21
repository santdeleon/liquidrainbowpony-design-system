'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _ = require('.');

var _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

var StyledModalHeader = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: ',
      ';\n  border-bottom: ',
      ';\n  border-radius: 0.5rem 0.5rem 0 0;\n',
    ])),
  function (_ref) {
    var padding = _ref.padding;
    return padding
      ? padding
      : 'var(--spacer-size-350-rem) var(--spacer-size-400-rem)';
  },
  function (_ref2) {
    var theme = _ref2.theme,
      withBorder = _ref2.withBorder;

    if (withBorder) {
      return theme.mode === 'dark'
        ? '2px solid var(--color-neutral-1100)'
        : ' 2px solid var(--color-neutral-200)';
    }
  },
);

var propTypes = {
  title: _propTypes.string.isRequired,
  withBorder: _propTypes.bool,
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.object,
    _propTypes.array,
    _propTypes.func,
  ]),
};

var ModalHeader = function ModalHeader(_ref3) {
  var title = _ref3.title,
    withBorder = _ref3.withBorder,
    children = _ref3.children,
    props = _objectWithoutProperties(_ref3, [
      'title',
      'withBorder',
      'children',
    ]);

  return /*#__PURE__*/ _react.default.createElement(
    StyledModalHeader,
    {
      withBorder: withBorder,
    },
    /*#__PURE__*/ _react.default.createElement(_.ModalScreenReaderText, {
      title: title,
    }),
    children,
  );
};

ModalHeader.propTypes = propTypes;
var _default = ModalHeader;
exports.default = _default;
