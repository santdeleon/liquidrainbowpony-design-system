Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.AutoColumn = void 0;

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _templateObject, _templateObject2;

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

var Column = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: ',
      ';\n  align-items: ',
      ';\n  margin: ',
      ';\n  padding: ',
      ';\n',
    ])),
  function (_ref) {
    var centered = _ref.centered;
    return centered && '100%';
  },
  function (_ref2) {
    var centered = _ref2.centered;
    return centered && 'center';
  },
  function (_ref3) {
    var margin = _ref3.margin;
    return margin && margin;
  },
  function (_ref4) {
    var padding = _ref4.padding;
    return padding && padding;
  },
);

var AutoColumn = _styledComponents.default.div(
  _templateObject2 ||
    (_templateObject2 = _taggedTemplateLiteral([
      '\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ',
      ';\n  justify-items: ',
      ';\n  margin: ',
      ';\n  padding: ',
      ';\n',
    ])),
  function (_ref5) {
    var gap = _ref5.gap;
    return (
      (gap === 'sm' && 'var(--spacer-size-300-rem)') ||
      (gap === 'md' && 'var(--spacer-size-400-rem)') ||
      (gap === 'lg' && 'var(--spacer-size-500-rem)') ||
      gap
    );
  },
  function (_ref6) {
    var justify = _ref6.justify;
    return justify && justify;
  },
  function (_ref7) {
    var margin = _ref7.margin;
    return margin && margin;
  },
  function (_ref8) {
    var padding = _ref8.padding;
    return padding && padding;
  },
);

exports.AutoColumn = AutoColumn;
var _default = Column;
exports.default = _default;
