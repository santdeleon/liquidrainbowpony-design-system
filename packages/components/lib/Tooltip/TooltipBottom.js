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

var _Tooltip = _interopRequireDefault(require('./Tooltip'));

var _templateObject;

var TooltipBottom = (0, _styledComponents['default'])(_Tooltip['default'])(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      "\n  top: 100%;\n  left: 50%;\n  margin-top: var(--spacer-size-400-rem);\n  transform: translateX(-50%);\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -0.6875rem;\n    border: 0.6875rem solid transparent;\n    border-bottom-color: ",
      ";\n  }\n  &:after {\n    content: ' ';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -0.5rem;\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: ",
      ';\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'transparent transparent var(--color-neutral-900) transparent'
      : 'transparent transparent var(--color-neutral-0) transparent';
  },
);
var _default = TooltipBottom;
exports['default'] = _default;
