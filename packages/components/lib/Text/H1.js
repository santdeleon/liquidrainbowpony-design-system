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

var _templateObject, _templateObject2, _templateObject3;

var H1 = _styledComponents['default'].h1(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  font-size: var(--typography-size-700-rem);\n  ',
      '\n  ',
      '\n  font-weight: ',
      ";\n  line-height: 'var(--typography-size-900-line-height)';\n  margin: ",
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
    var theme = _ref2.theme,
      fluid = _ref2.fluid;
    return theme.media.greaterThan('xs')(
      _templateObject3 ||
        (_templateObject3 = (0, _taggedTemplateLiteral2['default'])([
          '\n    font-size: var(--typography-size-900-rem);\n  ',
        ])),
    );
  },
  function (_ref3) {
    var fontWeight = _ref3.fontWeight;
    return fontWeight
      ? 'var(--typography-weight-'.concat(fontWeight, ')')
      : 'var(--typography-weight-bold)';
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-300-rem) var(--spacer-size-0-rem)';
  },
  function (_ref5) {
    var theme = _ref5.theme,
      color = _ref5.color;
    if (color) return color;
    else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-100)'
        : 'var(--color-neutral-900)';
    }
  },
);

var _default = H1;
exports['default'] = _default;
