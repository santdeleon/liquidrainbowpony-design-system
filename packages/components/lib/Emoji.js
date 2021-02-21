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

var StyledEmoji = _styledComponents['default'].span(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: inline-block;\n  width: ',
      ';\n  height: ',
      ';\n  margin: ',
      ';\n',
    ])),
  function (_ref) {
    var width = _ref.width;
    return width && width;
  },
  function (_ref2) {
    var height = _ref2.height;
    return height && height;
  },
  function (_ref3) {
    var margin = _ref3.margin;
    return margin && margin;
  },
);

var propTypes = {
  alt: _propTypes.string.isRequired,
  ariaLabel: _propTypes.string.isRequired,
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.func,
    _propTypes.object,
    _propTypes.array,
  ]).isRequired,
};

var Emoji = function Emoji(_ref4) {
  var alt = _ref4.alt,
    ariaLabel = _ref4.ariaLabel,
    children = _ref4.children,
    props = (0, _objectWithoutProperties2['default'])(_ref4, [
      'alt',
      'ariaLabel',
      'children',
    ]);
  return /*#__PURE__*/ _react['default'].createElement(
    StyledEmoji,
    (0, _extends2['default'])(
      {
        role: 'img',
        alt: alt,
        'aria-label': ariaLabel,
      },
      props,
    ),
    children,
  );
};

Emoji.propTypes = propTypes;
var _default = Emoji;
exports['default'] = _default;
