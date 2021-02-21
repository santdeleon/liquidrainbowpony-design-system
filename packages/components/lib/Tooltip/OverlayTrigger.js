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

var OverlayTriggerBase = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  position: relative;\n  display: inline-flex;\n  &:hover {\n    ',
      ' {\n      visibility: visible;\n    }\n    ',
      ' {\n      visibility: visible;\n    }\n    ',
      ' {\n      visibility: visible;\n    }\n    ',
      ' {\n      visibility: visible;\n    }\n  }\n',
    ])),
  _.TooltipTop,
  _.TooltipRight,
  _.TooltipBottom,
  _.TooltipLeft,
);

var OverlayTrigger = function OverlayTrigger(_ref) {
  var overlay = _ref.overlay,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ['overlay', 'children']);

  return /*#__PURE__*/ _react.default.createElement(
    OverlayTriggerBase,
    props,
    overlay,
    children,
  );
};

OverlayTrigger.propTypes = {
  overlay: (0, _propTypes.oneOfType)([
    _propTypes.array,
    _propTypes.object,
    _propTypes.string,
    _propTypes.func,
  ]).isRequired,
  children: (0, _propTypes.oneOfType)([
    _propTypes.array,
    _propTypes.object,
    _propTypes.string,
    _propTypes.func,
  ]).isRequired,
};
var _default = OverlayTrigger;
exports.default = _default;
