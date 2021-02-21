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

var Display1 = _styledComponents.default.h1(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  font-size: var(--typography-size-1200-rem);\n  font-weight: ',
      ";\n  line-height: 'var(--typography-size-1200-line-height)';\n  margin: ",
      ';\n  color: ',
      ';\n',
    ])),
  function (_ref) {
    var fontWeight = _ref.fontWeight;
    return fontWeight
      ? 'var(--typography-weight-'.concat(fontWeight, ')')
      : 'var(--typography-weight-semibold)';
  },
  function (_ref2) {
    var margin = _ref2.margin;
    return margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-200-rem) var(--spacer-size-0-rem)';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
);

var _default = Display1;
exports.default = _default;
