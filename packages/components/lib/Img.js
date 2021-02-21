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

var Img = _styledComponents.default.img(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  max-width: ',
      ';\n  width: ',
      ';\n  height: ',
      ';\n  margin: ',
      ';\n  border-radius: ',
      ';\n',
    ])),
  function (_ref) {
    var maxWidth = _ref.maxWidth;
    return maxWidth && maxWidth;
  },
  function (_ref2) {
    var width = _ref2.width,
      fluid = _ref2.fluid;
    if (fluid) return '100%';
    if (width) return width;
  },
  function (_ref3) {
    var height = _ref3.height,
      fluid = _ref3.fluid;
    if (fluid) return 'auto';
    if (height) return height;
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
  function (_ref5) {
    var borderRadius = _ref5.borderRadius;
    return borderRadius && borderRadius;
  },
);

var _default = Img;
exports.default = _default;
