'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _ButtonBase = _interopRequireDefault(require('./ButtonBase'));

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

var ButtonLink = (0, _styledComponents.default)(_ButtonBase.default)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  color: var(--color-neutral-0);\n  background-color: var(--color-blue-700);\n  border-color: var(--color-blue-800);\n  box-shadow: 0 0.125rem 0 0 var(--color-blue-800);\n  &:hover {\n    background-color: var(--color-blue-800);\n    border-color: var(--color-blue-900);\n    box-shadow: 0 0.125rem 0 0 var(--color-blue-900);\n  }\n  &:active {\n    background-color: var(--color-blue-800);\n    border-color: var(--color-blue-900);\n    box-shadow: 0 0 0 0 var(--color-blue-900);\n  }\n',
    ])),
);
var _default = ButtonLink;
exports.default = _default;
