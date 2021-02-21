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

var TooltipDivider = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  border-width: 0.125rem 0 0 0;\n  border-style: solid;\n  width: 100%;\n  padding: var(--spacer-size-0-rem);\n  border-color: ',
      ';\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-100)';
  },
);

var _default = TooltipDivider;
exports['default'] = _default;
