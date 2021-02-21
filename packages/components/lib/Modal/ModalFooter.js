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

var ModalFooter = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  padding: ',
      ';\n  margin: ',
      ';\n  background-color: ',
      ';\n  border-top: ',
      ';\n  border-radius: 0 0 0.5rem 0.5rem;\n',
    ])),
  function (_ref) {
    var padding = _ref.padding;
    return padding ? padding : '1rem';
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
  function (_ref4) {
    var theme = _ref4.theme,
      withBorder = _ref4.withBorder;

    if (withBorder) {
      return theme.mode === 'dark'
        ? '2px solid var(--color-neutral-1100)'
        : ' 2px solid var(--color-neutral-200)';
    }
  },
);

var _default = ModalFooter;
exports['default'] = _default;
