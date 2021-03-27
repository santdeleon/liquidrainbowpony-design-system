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

var TooltipBase = _styledComponents['default'].span(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  visibility: hidden;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  z-index: 1;\n  outline: 0;\n  width: ',
      ';\n  padding: var(--spacer-size-400-rem);\n  font-weight: var(--typography-weight-medium);\n  color: ',
      ';\n  background-color: ',
      ';\n  border: 0.125rem solid\n    ',
      ';\n  border-radius: 0.5rem;\n',
    ])),
  function (_ref) {
    var width = _ref.width;
    return width ? width : '10rem';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)';
  },
  function (_ref4) {
    var theme = _ref4.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
);

var propTypes = {
  ariaLabel: _propTypes.string.isRequired,
  children: (0, _propTypes.oneOfType)([
    _propTypes.array,
    _propTypes.object,
    _propTypes.string,
    _propTypes.func,
  ]),
};

var Tooltip = function Tooltip(_ref5) {
  var ariaLabel = _ref5.ariaLabel,
    children = _ref5.children,
    props = (0, _objectWithoutProperties2['default'])(_ref5, [
      'ariaLabel',
      'children',
    ]);
  return /*#__PURE__*/ _react['default'].createElement(
    TooltipBase,
    (0, _extends2['default'])(
      {
        tabIndex: '-1',
        'aria-label': ariaLabel,
      },
      props,
    ),
    children,
  );
};

Tooltip.propTypes = propTypes;
var _default = Tooltip;
exports['default'] = _default;
