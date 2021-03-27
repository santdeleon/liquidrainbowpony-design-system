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
      ';\n  font-size: var(--typography-size-300-rem);\n  font-weight: var(--typography-weight-bold);\n  text-decoration: none;\n  color: ',
      ';\n  transition: color 0.2s ease-out;\n  &:hover {\n    color: ',
      '\n',
    ])),
  function (_ref) {
    var margin = _ref.margin;
    return margin
      ? margin
      : 'var(--spacer-size-0-rem) var(--spacer-size-350-rem)';
  },
  function (_ref2) {
    var theme = _ref2.theme,
      disabled = _ref2.disabled,
      active = _ref2.active;
    if (active === 'true') return 'var(--color-pink-700)';

    if (disabled) {
      return theme.mode === 'light'
        ? 'rgba(0, 0, 0, 0.2)'
        : 'rgba(300, 300, 300, 0.3)';
    } else {
      return theme.mode === 'dark'
        ? 'var(--color-neutral-600)'
        : 'var(--color-neutral-700)';
    }
  },
  function (_ref3) {
    var theme = _ref3.theme,
      active = _ref3.active;

    if (theme.mode === 'light') {
      return active === 'true'
        ? 'var(--color-pink-700)'
        : 'var(--color-neutral-900)';
    } else {
      return active === 'true'
        ? 'var(--color-pink-700)'
        : 'var(--color-neutral-100)';
    }
  },
);
var _default = NavLink;
exports['default'] = _default;
