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

var TableRow = _styledComponents['default'].tr(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  transition: background-color 0.2s ease-out;\n  border-radius: 4px;\n  padding: var(--spacer-size-200-rem) var(--spacer-size-400-rem);\n  &:hover {\n    background-color: ',
      ';\n  }\n  &:first-child {\n    margin-bottom: -5px;\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1000)'
      : 'var(--color-neutral-100)';
  },
);

var _default = TableRow;
exports['default'] = _default;
