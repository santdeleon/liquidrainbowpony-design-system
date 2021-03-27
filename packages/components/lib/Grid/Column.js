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

var Column = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: ',
      ';\n  align-items: ',
      ';\n  margin: ',
      ';\n  padding: ',
      ';\n',
    ])),
  function (_ref) {
    var centered = _ref.centered;
    return centered && '100%';
  },
  function (_ref2) {
    var centered = _ref2.centered;
    return centered && 'center';
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

var _default = Column;
exports['default'] = _default;
