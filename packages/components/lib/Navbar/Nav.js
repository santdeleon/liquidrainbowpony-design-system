'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends'),
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);

var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _templateObject;

var StyledNav = _styledComponents['default'].nav(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  align-items: ',
      ';\n  justify-content: ',
      ';\n  padding: ',
      ';\n  margin: ',
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
    return padding && padding;
  },
  function (_ref4) {
    var margin = _ref4.margin;
    return margin && margin;
  },
);

var propTypes = {
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.object,
    _propTypes.array,
    _propTypes.func,
  ]),
};

var Nav = function Nav(_ref5) {
  var children = _ref5.children,
    props = (0, _objectWithoutProperties2['default'])(_ref5, ['children']);
  return /*#__PURE__*/ _react['default'].createElement(
    StyledNav,
    (0, _extends2['default'])(
      {
        role: 'navigation',
      },
      props,
    ),
    children,
  );
};

Nav.propTypes = propTypes;
var _default = Nav;
exports['default'] = _default;
