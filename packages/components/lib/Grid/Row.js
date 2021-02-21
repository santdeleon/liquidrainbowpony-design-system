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

var Row = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  display: flex;\n  flex-wrap: wrap;\n  align-items: ',
      ';\n  justify-content: ',
      ';\n  padding: ',
      ';\n  margin: ',
      ';\n  border: ',
      ';\n  border-radius: ',
      ';\n',
    ])),
  function (_ref) {
    var align = _ref.align;
    return align ? align : 'center';
  },
  function (_ref2) {
    var justify = _ref2.justify;
    return justify ? justify : 'flex-start';
  },
  function (_ref3) {
    var padding = _ref3.padding;
    return padding ? padding : 'var(--spacer-size-0-rem)';
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
  function (_ref5) {
    var border = _ref5.border;
    return border && border;
  },
  function (_ref6) {
    var borderRadius = _ref6.borderRadius;
    return borderRadius && borderRadius;
  },
);

var _default = Row;
exports.default = _default;
