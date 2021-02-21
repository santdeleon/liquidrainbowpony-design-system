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

var ModalBody = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  padding: ',
      ';\n  margin: ',
      ';\n  background-color: ',
      ';\n',
    ])),
  function (_ref) {
    var padding = _ref.padding;
    return padding ? padding : 'var(--spacer-size-400-rem)';
  },
  function (_ref2) {
    var margin = _ref2.margin;
    return margin && margin;
  },
  function (_ref3) {
    var theme = _ref3.theme,
      withBackground = _ref3.withBackground;

    if (withBackground) {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-100)';
    }
  },
);

var _default = ModalBody;
exports['default'] = _default;
