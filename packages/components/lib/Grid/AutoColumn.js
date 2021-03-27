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

var AutoColumn = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ',
      ';\n  justify-items: ',
      ';\n  margin: ',
      ';\n  padding: ',
      ';\n',
    ])),
  function (_ref) {
    var gap = _ref.gap;
    return (
      (gap === 'sm' && 'var(--spacer-size-300-rem)') ||
      (gap === 'md' && 'var(--spacer-size-400-rem)') ||
      (gap === 'lg' && 'var(--spacer-size-500-rem)') ||
      gap
    );
  },
  function (_ref2) {
    var justify = _ref2.justify;
    return justify && justify;
  },
  function (_ref3) {
    var margin = _ref3.margin;
    return margin && margin;
  },
  function (_ref4) {
    var padding = _ref4.padding;
    return padding && padding;
  },
);

var _default = AutoColumn;
exports['default'] = _default;
