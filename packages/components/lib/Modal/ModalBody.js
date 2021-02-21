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

var ModalBody = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  padding: ',
      ';\n  margin: ',
      ';\n  background-color: ',
      ';\n',
    ])),
  function (_ref) {
    var padding = _ref.padding;
    return padding ? padding : 'var(--spacer-size-400-rem)';
  },
  function (_ref2) {
    var margin = _ref2.margin;
    return margin && margin;
  },
  function (_ref3) {
    var theme = _ref3.theme,
      withBackground = _ref3.withBackground;

    if (withBackground) {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-100)';
    }
  },
);

var _default = ModalBody;
exports.default = _default;
