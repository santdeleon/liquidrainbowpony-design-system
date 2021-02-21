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

var TooltipLeft = (0, _styledComponents.default)(_Tooltip.default)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      "\n  top: -0.55rem;\n  right: 100%;\n  margin-right: var(--spacer-size-400-rem);\n  &:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    margin-top: -0.6875rem;\n    bottom: 100%;\n    border: 0.6875rem solid transparent;\n    border-left-color: ",
      ";\n  }\n  &:after {\n    content: ' ';\n    position: absolute;\n    top: 50%;\n    left: 100%;\n    margin-top: -0.5rem;\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: ",
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
      ? 'transparent transparent transparent var(--color-neutral-900)'
      : 'transparent transparent transparent var(--color-neutral-0)';
  },
);
var _default = TooltipLeft;
exports.default = _default;
