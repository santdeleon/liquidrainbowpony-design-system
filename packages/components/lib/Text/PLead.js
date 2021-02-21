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

var PLead = _styledComponents['default'].p(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  font-size: var(--typography-size-300-rem);\n  font-weight: ',
      ';\n  line-height: ',
      ';\n  margin: ',
      ';\n  color: ',
      ';\n',
    ])),
  function (_ref) {
    var fontWeight = _ref.fontWeight;
    return fontWeight
      ? 'var(--typography-weight-'.concat(fontWeight, ')')
      : 'var(--typography-weight-normal)';
  },
  'var(--typography-size-300-line-height)%',
  function (_ref2) {
    var margin = _ref2.margin;
    return margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-200-rem) var(--spacer-size-0-rem)';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-600)'
      : 'var(--color-neutral-700)';
  },
);

var _default = PLead;
exports['default'] = _default;
