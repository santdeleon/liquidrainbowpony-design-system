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

var _Text = require('./Text');

var _templateObject;

var Box = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  background-color: ',
      ';\n  border-width: 0.125rem 0.125rem 0.25rem;\n  border-style: solid;\n  border-color: ',
      ';\n  border-radius: 0.5rem;\n  padding: ',
      ';\n  margin: ',
      ';\n  width: ',
      ';\n  max-width: ',
      ';\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n  ',
      ' {\n    color: ',
      ';\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
  function (_ref3) {
    var padding = _ref3.padding;
    return padding ? padding : 'var(--spacer-size-400-rem)';
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
  function (_ref5) {
    var width = _ref5.width;
    return width && width;
  },
  function (_ref6) {
    var maxWidth = _ref6.maxWidth;
    return maxWidth && maxWidth;
  },
  _Text.Small,
  function (_ref7) {
    var theme = _ref7.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-500)';
  },
  _Text.P,
  function (_ref8) {
    var theme = _ref8.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-500)';
  },
  _Text.PLead,
  function (_ref9) {
    var theme = _ref9.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-500)';
  },
  _Text.PLeadLarge,
  function (_ref10) {
    var theme = _ref10.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-500)';
  },
  _Text.H5,
  function (_ref11) {
    var theme = _ref11.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-0)';
  },
  _Text.H4,
  function (_ref12) {
    var theme = _ref12.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-0)';
  },
  _Text.H3,
  function (_ref13) {
    var theme = _ref13.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-0)';
  },
  _Text.H2,
  function (_ref14) {
    var theme = _ref14.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-0)';
  },
  _Text.H1,
  function (_ref15) {
    var theme = _ref15.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-0)';
  },
  _Text.Display3,
  function (_ref16) {
    var theme = _ref16.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-0)';
  },
  _Text.Display2,
  function (_ref17) {
    var theme = _ref17.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-0)';
  },
  _Text.Display1,
  function (_ref18) {
    var theme = _ref18.theme;
    return theme.mode === 'dark' && 'var(--color-neutral-0)';
  },
);

var _default = Box;
exports['default'] = _default;
