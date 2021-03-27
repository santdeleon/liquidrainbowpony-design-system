'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _styledComponents = require('styled-components');

var _templateObject;

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  * {\n    box-sizing: border-box;\n  }\n\n  html, input, textarea, button {\n    font-family: var(--typography-family-din-round-pro), var(--typography-family-sf-pro-display), var(--typography-family-helvetica-neue), var(--typography-family-helvetica), system;\n    font-display: fallback;\n  }\n\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    scroll-behavior: smooth;\n    height: 100%;\n  }\n\n  html {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body {\n    color: ',
      ';\n    background: ',
      ';\n    border-width: 6px 0 0 0;\n    border-style: solid;\n    border-image-slice: 1;\n    border-image-source: linear-gradient(\n      to right,\n      #e92b2b,\n      #ff9600,\n      #ffc800,\n      #6adb55,\n      #50cce2,\n      #bc3ede,\n      #ff4dd3\n    );\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  ::-webkit-scrollbar {\n    background-color: #ff4dd3;\n    width: 6px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    height: 10px;\n    background: linear-gradient(\n      to bottom,\n      #ff4dd3,\n      #bc3ede,\n      #50cce2,\n      #6adb55,\n      #ffc800,\n      #ff9600,\n      #e92b2b\n    );\n  }\n\n  ::selection {\n    background: rgba(255, 77, 211, 0.3);\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-0)'
      : 'var(--color-neutral-1100)';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1000)'
      : 'var(--color-neutral-0)';
  },
);
var _default = GlobalStyles;
exports['default'] = _default;
