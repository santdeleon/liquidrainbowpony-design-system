Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _ButtonBase = _interopRequireDefault(require('../ButtonBase'));

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

var ButtonDropdown = (0, _styledComponents.default)(_ButtonBase.default)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  z-index: 2;\n  font-size: var(--typography-size-300-rem);\n  padding: ',
      ';\n  color: ',
      ";\n  background-color: transparent;\n  border: 0;\n  box-shadow: none;\n  &:hover {\n    color: var(--color-pink-700);\n  }\n  &:focus {\n    outline: 0;\n  }\n  &:active {\n    transform: translateY(0);\n  }\n  &:after {\n    content: ' \u25BE';\n    color: ",
      ';\n  }\n',
    ])),
  function (_ref) {
    var padding = _ref.padding;
    return padding ? padding : 'var(--spacer-size-0-rem)';
  },
  function (_ref2) {
    var theme = _ref2.theme,
      active = _ref2.active;

    if (active === 'true') {
      return 'var(--color-pink-700)';
    } else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-100)'
        : 'var(--color-neutral-900)';
    }
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
);
var _default = ButtonDropdown;
exports.default = _default;
