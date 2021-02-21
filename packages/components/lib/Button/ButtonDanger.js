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

var _ButtonBase = _interopRequireDefault(require('./ButtonBase'));

var _templateObject;

var ButtonDanger = (0, _styledComponents['default'])(_ButtonBase['default'])(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  color: var(--color-neutral-0);\n  background-color: var(--color-red-800);\n  border-color: var(--color-red-900);\n  box-shadow: 0 0.125rem 0 0 var(--color-red-900);\n  &:hover {\n    background-color: var(--color-red-900);\n    border-color: var(--color-red-1000);\n    box-shadow: 0 0.125rem 0 0 var(--color-red-1000);\n  }\n  &:active {\n    background-color: var(--color-red-900);\n    border-color: var(--color-red-1000);\n    box-shadow: 0 0 0 0 var(--color-red-1000);\n  }\n',
    ])),
);
var _default = ButtonDanger;
exports['default'] = _default;
