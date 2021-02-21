'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

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

var ToggleTrack = _styledComponents.default.span(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  position: relative;\n  display: inline-block;\n  width: 2.5rem;\n  height: 1.5rem;\n  border-radius: 2.125rem;\n  outline: 0;\n',
    ])),
);

var _default = ToggleTrack;
exports.default = _default;
