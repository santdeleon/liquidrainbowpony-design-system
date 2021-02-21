Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

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

var Box = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  background-color: ',
      ';\n  border-width: 0.125rem 0.125rem 0.25rem;\n  border-style: solid;\n  border-color: ',
      ';\n  border-radius: 0.5rem;\n  padding: ',
      ';\n  margin: ',
      ';\n  width: ',
      ';\n  max-width: ',
      ';\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
  function (_ref3) {
    var padding = _ref3.padding;
    return padding ? padding : 'var(--spacer-size-400-rem)';
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
  function (_ref5) {
    var width = _ref5.width;
    return width && width;
  },
  function (_ref6) {
    var maxWidth = _ref6.maxWidth;
    return maxWidth && maxWidth;
  },
);

var _default = Box;
exports.default = _default;
