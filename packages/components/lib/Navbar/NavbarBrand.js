'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _reactRouterDom = require('react-router-dom');

var _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  );
}

var NavbarBrand = (0, _styledComponents.default)(_reactRouterDom.Link)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  display: flex;\n  font-size: var(--typography-size-700-rem);\n  font-weight: var(--typography-weight-medium);\n  text-decoration: none;\n  color: ',
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
exports.default = _default;
