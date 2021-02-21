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

var ButtonBase = _styledComponents['default'].button(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  cursor: pointer;\n  position: relative;\n  display: ',
      ';\n  padding: ',
      ';\n  margin: ',
      ';\n  width: ',
      ';\n  font-size: ',
      ';\n  font-weight: var(--typography-weight-medium);\n  line-height: 1.5;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  border-style: solid;\n  -webkit-border-radius: 0.5rem;\n  -moz-border-radius: 0.5rem;\n  border-radius: 0.5rem;\n  border-width: 0.125rem;\n  border-color: var(--color-neutral-200);\n  box-shadow: 0 0.125rem 0 0 var(--color-neutral-200);\n  overflow: visible;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  transform: translateY(0);\n  &:focus {\n    outline: none;\n  }\n  &:active {\n    box-shadow: 0 0 0 0 var(--color-neutral-200);\n    transform: translateY(0.14rem);\n  }\n  &:disabled {\n    opacity: 50%;\n    pointer-events: none;\n  }\n',
    ])),
  function (_ref) {
    var size = _ref.size;
    return size === 'block' ? 'block' : 'inline-block';
  },
  function (_ref2) {
    var size = _ref2.size;
    return size === 'lg' ? '0.5rem 1.5rem' : '0.25rem 1.25rem';
  },
  function (_ref3) {
    var margin = _ref3.margin;
    return margin && margin;
  },
  function (_ref4) {
    var size = _ref4.size;
    return size && size === 'block' && '100%';
  },
  function (_ref5) {
    var size = _ref5.size;
    if (size === 'sm') return 'var(--typography-size-100-rem)';
    if (!size || size === 'md') return 'var(--typography-size-200-rem)';
    if (size === 'lg' || size === 'block')
      return 'var(--typography-size-400-rem)';
  },
);

var _default = ButtonBase;
exports['default'] = _default;
