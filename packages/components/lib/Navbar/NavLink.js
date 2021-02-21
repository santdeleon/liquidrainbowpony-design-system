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

var NavLink = (0, _styledComponents['default'])(_reactRouterDom.Link)(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  margin: ',
      ';\n  font-size: var(--typography-size-300-rem);\n  font-weight: var(--typography-weight-medium);\n  text-decoration: none;\n  color: ',
      ';\n  &:hover {\n    color: var(--color-pink-700);\n  }\n',
    ])),
  function (_ref) {
    var margin = _ref.margin;
    return margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-350-rem)';
  },
  function (_ref2) {
    var active = _ref2.active,
      theme = _ref2.theme;
    if (active === 'true') return 'var(--color-pink-700)';
    else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-600)'
        : 'var(--color-neutral-700)';
    }
  },
);
var _default = NavLink;
exports['default'] = _default;
