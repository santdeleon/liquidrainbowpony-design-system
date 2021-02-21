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

var _templateObject;

var ModalContent = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  z-index: 3;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background-color: ',
      ';\n  border-radius: 0.5rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color: ',
      ';\n  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.1),\n    0 0.375rem 1.25rem 0 rgba(0, 0, 0, 0.1);\n  animation-name: animatetop;\n  animation-duration: 1s;\n  animation-timing-function: cubic-bezier(0.4, 1, 0.5, 1);\n  width: ',
      ';\n  min-height: 100%;\n  transform: perspective(200px) translateY(0);\n  @media only screen and (max-width: 576px) {\n    width: 25rem;\n  }\n  @keyframes animatetop {\n    from {\n      top: -10vh;\n      opacity: 0;\n    }\n    to {\n      top: 0;\n      opacity: 1;\n    }\n  }\n',
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
    var width = _ref3.width;
    return width ? width : '28.125rem';
  },
);

var _default = ModalContent;
exports['default'] = _default;
