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

var _ = require('.');

var _templateObject;

var StyledModal = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  z-index: 3;\n  position: fixed;\n  top: var(--spacer-size-0-rem);\n  right: var(--spacer-size-0-rem);\n  bottom: var(--spacer-size-0-rem);\n  left: var(--spacer-size-0-rem);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-box-pack: center;\n',
    ])),
);

var propTypes = {
  id: _propTypes.string.isRequired,
  show: _propTypes.bool.isRequired,
  ariaDescribedBy: _propTypes.string,
  ariaLabel: _propTypes.string,
  onHide: _propTypes.func.isRequired,
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.object,
    _propTypes.array,
    _propTypes.func,
  ]),
};

var Modal = function Modal(_ref) {
  var id = _ref.id,
    show = _ref.show,
    ariaDescribedBy = _ref.ariaDescribedBy,
    ariaLabel = _ref.ariaLabel,
    onHide = _ref.onHide,
    children = _ref.children,
    props = (0, _objectWithoutProperties2['default'])(_ref, [
      'id',
      'show',
      'ariaDescribedBy',
      'ariaLabel',
      'onHide',
      'children',
    ]);
  if (!show) return null;
  return /*#__PURE__*/ _react['default'].createElement(
    StyledModal,
    (0, _extends2['default'])(
      {
        role: 'dialog',
        show: show,
        id: id,
        tabindex: show ? '0' : '-1',
        'aria-hidden': !show,
        'aria-describedby': ariaDescribedBy,
        'aria-label': ariaLabel,
      },
      props,
    ),
    /*#__PURE__*/ _react['default'].createElement(_.ModalOverlay, {
      onHide: onHide,
    }),
    children,
  );
};

Modal.propTypes = propTypes;
var _default = Modal;
exports['default'] = _default;
