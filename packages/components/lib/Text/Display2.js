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

var Display2 = _styledComponents['default'].h1(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  font-size: var(--typography-size-1100-rem);\n  font-weight: ',
      ";\n  line-height: 'var(--typography-size-1100-line-height)';\n  margin: ",
      ';\n  color: ',
      ';\n',
    ])),
  function (_ref) {
    var fontWeight = _ref.fontWeight;
    return fontWeight
      ? 'var(--typography-weight-'.concat(fontWeight, ')')
      : 'var(--typography-weight-semibold)';
  },
  function (_ref2) {
    var margin = _ref2.margin;
    return margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-200-rem) var(--spacer-size-0-rem)';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
);

var _default = Display2;
exports['default'] = _default;
