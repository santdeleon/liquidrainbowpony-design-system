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

var _reactRouterDom = require('react-router-dom');

var _templateObject;

var ButtonDropdownLink = (0, _styledComponents['default'])(
  _reactRouterDom.Link,
)(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  justify-content: ',
      ';\n  align-items: ',
      ';\n  padding: ',
      ';\n  font-size: var(--typography-size-300-rem);\n  font-weight: var(--typography-weight-medium);\n  text-decoration: none;\n  color: ',
      ';\n  color: ',
      ';\n  background-color: ',
      ';\n  &:hover {\n    background-color: ',
      ';\n  }\n  &:not(:first-child) {\n    border-style: solid;\n    border-color: ',
      ';\n    border-width: 0.125rem 0 0 0;\n  }\n  &:first-child {\n    border-radius: 0.4rem 0.4rem 0 0;\n  }\n  &:last-child {\n    border-radius: 0 0 0.4rem 0.4rem;\n  }\n',
    ])),
  function (_ref) {
    var justify = _ref.justify;
    return justify ? justify : 'center';
  },
  function (_ref2) {
    var align = _ref2.align;
    return align ? align : 'center';
  },
  function (_ref3) {
    var padding = _ref3.padding;
    return padding
      ? padding
      : 'var(--spacer-size-400-rem) var(--spacer-size-0-rem)';
  },
  function (_ref4) {
    var theme = _ref4.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
  function (_ref5) {
    var active = _ref5.active;
    return active && 'var(--color-pink-700)';
  },
  function (_ref6) {
    var active = _ref6.active,
      theme = _ref6.theme;
    if (!active) return null;
    else {
      return active && theme.mode === 'dark'
        ? 'var(--color-neutral-1000)'
        : 'var(--color-neutral-100)';
    }
  },
  function (_ref7) {
    var theme = _ref7.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1000)'
      : 'var(--color-neutral-100)';
  },
  function (_ref8) {
    var theme = _ref8.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
);
var _default = ButtonDropdownLink;
exports['default'] = _default;
