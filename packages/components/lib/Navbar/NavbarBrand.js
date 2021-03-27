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

var NavbarBrand = (0, _styledComponents['default'])(_reactRouterDom.Link)(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  font-size: var(--typography-size-700-rem);\n  font-weight: var(--typography-weight-bold);\n  text-decoration: none;\n  color: ',
      ';\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-0)'
      : 'var(--color-neutral-900)';
  },
);
var _default = NavbarBrand;
exports['default'] = _default;
