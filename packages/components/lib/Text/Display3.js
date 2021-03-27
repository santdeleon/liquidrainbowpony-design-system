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

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var Display3 = _styledComponents['default'].h1(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  font-size: var(--typography-size-700-rem);\n  ',
      '\n  ',
      '\n  ',
      '\n  font-weight: ',
      ";\n  line-height: 'var(--typography-size-1000-line-height)';\n  margin: ",
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
    var theme = _ref3.theme,
      fluid = _ref3.fluid;
    return theme.media.greaterThan('sm')(
      _templateObject4 ||
        (_templateObject4 = (0, _taggedTemplateLiteral2['default'])([
          '\n    font-size: var(--typography-size-1000-rem);\n  ',
        ])),
    );
  },
  function (_ref4) {
    var fontWeight = _ref4.fontWeight;
    return fontWeight
      ? 'var(--typography-weight-'.concat(fontWeight, ')')
      : 'var(--typography-weight-bold)';
  },
  function (_ref5) {
    var margin = _ref5.margin;
    return margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-0-rem) var(--spacer-size-300-rem) var(--spacer-size-0-rem)';
  },
  function (_ref6) {
    var theme = _ref6.theme,
      color = _ref6.color;
    if (color) return color;
    else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-100)'
        : 'var(--color-neutral-900)';
    }
  },
);

var _default = Display3;
exports['default'] = _default;
