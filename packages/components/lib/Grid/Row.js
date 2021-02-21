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

var Row = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  flex-wrap: wrap;\n  align-items: ',
      ';\n  justify-content: ',
      ';\n  padding: ',
      ';\n  margin: ',
      ';\n  border: ',
      ';\n  border-radius: ',
      ';\n',
    ])),
  function (_ref) {
    var align = _ref.align;
    return align ? align : 'center';
  },
  function (_ref2) {
    var justify = _ref2.justify;
    return justify ? justify : 'flex-start';
  },
  function (_ref3) {
    var padding = _ref3.padding;
    return padding ? padding : 'var(--spacer-size-0-rem)';
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
  function (_ref5) {
    var border = _ref5.border;
    return border && border;
  },
  function (_ref6) {
    var borderRadius = _ref6.borderRadius;
    return borderRadius && borderRadius;
  },
);

var _default = Row;
exports['default'] = _default;
