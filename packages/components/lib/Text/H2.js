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

var _templateObject, _templateObject2;

var H2 = _styledComponents['default'].h2(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  font-size: var(--typography-size-700-rem);\n  ',
      '\n  font-weight: ',
      ";\n  line-height: 'var(--typography-size-800-line-height)';\n  margin: ",
      ';\n  color: ',
      ';\n',
    ])),
  function (_ref) {
    var theme = _ref.theme,
      fluid = _ref.fluid;
    return theme.media.greaterThan('xxs')(
      _templateObject2 ||
        (_templateObject2 = (0, _taggedTemplateLiteral2['default'])([
          '\n    font-size: var(--typography-size-800-rem);\n  ',
        ])),
    );
  },
  function (_ref2) {
    var fontWeight = _ref2.fontWeight;
    return fontWeight
      ? 'var(--typography-weight-'.concat(fontWeight, ')')
      : 'var(--typography-weight-bold)';
  },
  function (_ref3) {
    var margin = _ref3.margin;
    return margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-300-rem) var(--spacer-size-0-rem)';
  },
  function (_ref4) {
    var theme = _ref4.theme,
      color = _ref4.color;
    if (color) return color;
    else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-100)'
        : 'var(--color-neutral-900)';
    }
  },
);

var _default = H2;
exports['default'] = _default;
