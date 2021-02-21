'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _ButtonBase = _interopRequireDefault(require('./ButtonBase'));

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

var ButtonTransparent = (0, _styledComponents.default)(_ButtonBase.default)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  color: ',
      ';\n  -webkit-background-clip: text !important;\n  background: ',
      ';\n  border-color: transparent;\n  border-width: 0.125rem;\n  box-shadow: none;\n  &:hover {\n    color: ',
      ';\n    background: ',
      ';\n    border-color: transparent;\n  }\n  &:active {\n    color: ',
      ';\n    background: ',
      ';\n    border-color: transparent;\n    border-width: 0.125rem;\n    transform: translateY(0);\n  }\n  &:focus(:not&:active) {\n    background: ',
      ';\n  }\n  &:focus {\n    color: ',
      ';\n    border-color: ',
      ';\n    border-width: 0.125rem;\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark' ? 'transparent' : 'var(--color-neutral-900)';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'linear-gradient(to right,#e92b2b, #ff9600, #ffc800, #6adb55, #50cce2, #bc3ede, #ff4dd3)'
      : 'transparent';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark' ? 'transparent' : 'var(--color-neutral-800)';
  },
  function (_ref4) {
    var theme = _ref4.theme;
    return theme.mode === 'dark'
      ? 'linear-gradient(to right,#e92b2b, #ff9600, #ffc800, #6adb55, #50cce2, #bc3ede, #ff4dd3)'
      : 'transparent';
  },
  function (_ref5) {
    var theme = _ref5.theme;
    return theme.mode === 'dark' ? 'transparent' : 'var(--color-neutral-900)';
  },
  function (_ref6) {
    var theme = _ref6.theme;
    return theme.mode === 'dark'
      ? 'linear-gradient(to right,#e92b2b, #ff9600, #ffc800, #6adb55, #50cce2, #bc3ede, #ff4dd3)'
      : 'transparent';
  },
  function (_ref7) {
    var theme = _ref7.theme;
    return theme.mode === 'dark'
      ? 'linear-gradient(to right,#e92b2b, #ff9600, #ffc800, #6adb55, #50cce2, #bc3ede, #ff4dd3)'
      : 'transparent';
  },
  function (_ref8) {
    var theme = _ref8.theme;
    return theme.mode === 'dark' ? 'transparent' : 'var(--color-neutral-900)';
  },
  function (_ref9) {
    var theme = _ref9.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-300)';
  },
);
var _default = ButtonTransparent;
exports.default = _default;
