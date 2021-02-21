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

var Img = _styledComponents['default'].img(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  max-width: ',
      ';\n  width: ',
      ';\n  height: ',
      ';\n  margin: ',
      ';\n  border-radius: ',
      ';\n',
    ])),
  function (_ref) {
    var maxWidth = _ref.maxWidth;
    return maxWidth && maxWidth;
  },
  function (_ref2) {
    var width = _ref2.width,
      fluid = _ref2.fluid;
    if (fluid) return '100%';
    if (width) return width;
  },
  function (_ref3) {
    var height = _ref3.height,
      fluid = _ref3.fluid;
    if (fluid) return 'auto';
    if (height) return height;
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
  function (_ref5) {
    var borderRadius = _ref5.borderRadius;
    return borderRadius && borderRadius;
  },
);

var _default = Img;
exports['default'] = _default;
