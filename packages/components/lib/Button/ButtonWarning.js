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

var ButtonWarning = (0, _styledComponents.default)(_ButtonBase.default)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  color: var(--color-neutral-900);\n  background-color: ',
      ';\n  border-color: ',
      ';\n  box-shadow: ',
      ';\n  &:hover {\n    color: ',
      ';\n    background-color: ',
      ';\n    border-color: ',
      ';\n    box-shadow: ',
      ';\n  }\n  &:active {\n    color: ',
      ';\n    background-color: ',
      ';\n    border-color: ',
      ';\n    box-shadow: ',
      ';\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-yellow-600)'
      : 'var(--color-yellow-400)';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'var(--color-yellow-700)'
      : 'var(--color-yellow-600)';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? '0 0.125rem 0 0 var(--color-yellow-700)'
      : '0 0.125rem 0 0 var(--color-yellow-600)';
  },
  function (_ref4) {
    var theme = _ref4.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-0)'
      : 'var(--color-neutral-900)';
  },
  function (_ref5) {
    var theme = _ref5.theme;
    return theme.mode === 'dark'
      ? 'var(--color-yellow-700)'
      : 'var(--color-yellow-600)';
  },
  function (_ref6) {
    var theme = _ref6.theme;
    return theme.mode === 'dark'
      ? 'var(--color-yellow-800)'
      : 'var(--color-yellow-700)';
  },
  function (_ref7) {
    var theme = _ref7.theme;
    return theme.mode === 'dark'
      ? '0 0.125rem 0 0 var(--color-yellow-800)'
      : '0 0.125rem 0 0 var(--color-yellow-700)';
  },
  function (_ref8) {
    var theme = _ref8.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-0)'
      : 'var(--color-neutral-900)';
  },
  function (_ref9) {
    var theme = _ref9.theme;
    return theme.mode === 'dark'
      ? 'var(--color-yellow-700)'
      : 'var(--color-yellow-600)';
  },
  function (_ref10) {
    var theme = _ref10.theme;
    return theme.mode === 'dark'
      ? 'var(--color-yellow-800)'
      : 'var(--color-yellow-700)';
  },
  function (_ref11) {
    var theme = _ref11.theme;
    return theme.mode === 'dark'
      ? '0 0 0 0 var(--color-yellow-800)'
      : '0 0 0 0 var(--color-yellow-700)';
  },
);
var _default = ButtonWarning;
exports.default = _default;
