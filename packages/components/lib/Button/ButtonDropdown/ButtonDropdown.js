'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _ButtonBase = _interopRequireDefault(require('../ButtonBase'));

var _templateObject;

var ButtonDropdown = (0, _styledComponents['default'])(_ButtonBase['default'])(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  z-index: 2;\n  font-size: var(--typography-size-300-rem);\n  padding: ',
      ';\n  color: ',
      ';\n  background-color: transparent;\n  border: 0;\n  box-shadow: none;\n  &:hover {\n    color: ',
      ";\n  }\n  &:focus {\n    outline: 0;\n  }\n  &:active {\n    transform: translateY(0);\n  }\n  &:after {\n    content: '';\n    color: ",
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
    return theme.mode === 'light'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-0)';
  },
  function (_ref4) {
    var theme = _ref4.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
);
var _default = ButtonDropdown;
exports['default'] = _default;
