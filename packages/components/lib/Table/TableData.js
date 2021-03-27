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

var TableData = _styledComponents['default'].td(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  flex-grow: 1;\n  &:not(:first-child) {\n    padding: var(--spacer-size-300-rem) var(--spacer-size-400-rem);\n    border-top: ',
      ';\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme,
      border = _ref.border;

    if (border) {
      return theme.mode === 'dark'
        ? '2px solid var(--color-neutral-1000)'
        : '2px solid var(--color-neutral-100)';
    }
  },
);

var _default = TableData;
exports['default'] = _default;
