'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

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

var _react = _interopRequireWildcard(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _hooks = require('@liquidrainbowpony/hooks');

var _templateObject;

var StyledButtonDropdownMenu = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  outline: 0;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: var(--spacer-size-400-rem);\n  flex-direction: column;\n  text-align: ',
      ';\n  width: ',
      ';\n  color: ',
      ';\n  background-color: ',
      ';\n  border: 2px solid\n    ',
      ";\n  border-radius: 0.5rem;\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -0.6875rem;\n    border: 0.6875rem solid transparent;\n    border-bottom-color: ",
      ";\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -0.5rem;\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: ",
      ';\n  }\n',
    ])),
  function (_ref) {
    var align = _ref.align;
    return align ? align : 'center';
  },
  function (_ref2) {
    var width = _ref2.width;
    return width ? width : '12rem';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
  function (_ref4) {
    var theme = _ref4.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)';
  },
  function (_ref5) {
    var theme = _ref5.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
  function (_ref6) {
    var theme = _ref6.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
  function (_ref7) {
    var theme = _ref7.theme;
    return theme.mode === 'dark'
      ? 'transparent transparent var(--color-neutral-900) transparent'
      : 'transparent transparent  var(--color-neutral-0) transparent';
  },
);

var propTypes = {
  id: _propTypes.string.isRequired,
  show: _propTypes.bool.isRequired,
  setShow: _propTypes.func.isRequired,
  ariaDescribedBy: _propTypes.string,
  ariaLabel: _propTypes.string,
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.object,
    _propTypes.array,
    _propTypes.func,
  ]),
};

var ButtonDropdownMenu = function ButtonDropdownMenu(_ref8) {
  var id = _ref8.id,
    show = _ref8.show,
    setShow = _ref8.setShow,
    ariaDescribedBy = _ref8.ariaDescribedBy,
    ariaLabel = _ref8.ariaLabel,
    children = _ref8.children,
    props = (0, _objectWithoutProperties2['default'])(_ref8, [
      'id',
      'show',
      'setShow',
      'ariaDescribedBy',
      'ariaLabel',
      'children',
    ]);
  var ref = /*#__PURE__*/ (0, _react.createRef)();
  (0, _hooks.useOnClickOutside)(ref, function () {
    return setShow(false);
  });
  if (!show) return null;
  return /*#__PURE__*/ _react['default'].createElement(
    StyledButtonDropdownMenu,
    (0, _extends2['default'])(
      {
        ref: ref,
        show: show,
        id: id,
        tabindex: show ? '0' : '-1',
        'aria-hidden': !show,
        'aria-describedby': ariaDescribedBy,
        'aria-label': ariaLabel,
      },
      props,
    ),
    children,
  );
};

ButtonDropdownMenu.propTypes = propTypes;
var _default = ButtonDropdownMenu;
exports['default'] = _default;
