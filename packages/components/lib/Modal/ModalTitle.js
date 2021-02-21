Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _Text = require('../Text');

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

var ModalTitle = (0, _styledComponents.default)(_Text.H4)(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  font-weight: var(--typography-weight-medium);\n  margin: var(--spacer-size-0-rem);\n',
    ])),
);
var _default = ModalTitle;
exports.default = _default;
