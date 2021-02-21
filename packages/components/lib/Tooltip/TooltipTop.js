'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _Tooltip = _interopRequireDefault(require('./Tooltip'));

var _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  );
}

var TooltipTop = (0, _styledComponents.default)(_Tooltip.default)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      "\n  bottom: 100%;\n  left: 50%;\n  margin-bottom: var(--spacer-size-400-rem);\n  transform: translateX(-50%);\n  &:before {\n    content: '';\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -0.6875rem;\n    border: 0.6875rem solid transparent;\n    border-top-color: ",
      ";\n  }\n  &:after {\n    content: ' ';\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -0.5rem;\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: ",
      ';\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-900) transparent transparent transparent'
      : 'var(--color-neutral-0) transparent transparent transparent';
  },
);
var _default = TooltipTop;
exports.default = _default;
