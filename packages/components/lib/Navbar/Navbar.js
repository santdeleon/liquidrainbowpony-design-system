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

var _templateObject;

var Navbar = _styledComponents['default'].header(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  align-items: ',
      ';\n  justify-content: ',
      ';\n  padding: ',
      ';\n  margin: ',
      ';\n  position: ',
      ';\n  top: ',
      ';\n  bottom: ',
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
    return padding
      ? padding
      : 'var(--spacer-size-400-rem) var(--spacer-size-0-rem)';
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
  function (_ref5) {
    var fixed = _ref5.fixed,
      sticky = _ref5.sticky;
    if (fixed && fixed !== 'none') return 'fixed';
    if (sticky && sticky !== 'none') return 'sticky';
  },
  function (_ref6) {
    var fixed = _ref6.fixed,
      sticky = _ref6.sticky;
    if (fixed && fixed === 'top') return 'var(--spacer-size-0-rem)';
    if (sticky && sticky === 'top') return 'var(--spacer-size-0-rem)';
  },
  function (_ref7) {
    var fixed = _ref7.fixed,
      sticky = _ref7.sticky;
    if (fixed && fixed === 'bottom') return 'var(--spacer-size-0-rem)';
    if (sticky && sticky === 'bottom') return 'var(--spacer-size-0-rem)';
  },
);

var _default = Navbar;
exports['default'] = _default;
