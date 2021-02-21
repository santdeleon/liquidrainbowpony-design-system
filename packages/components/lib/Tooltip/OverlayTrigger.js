'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);

var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _ = require('.');

var _templateObject;

var OverlayTriggerBase = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
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
    props = (0, _objectWithoutProperties2['default'])(_ref, [
      'overlay',
      'children',
    ]);
  return /*#__PURE__*/ _react['default'].createElement(
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
exports['default'] = _default;
