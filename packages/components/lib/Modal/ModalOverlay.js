'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _templateObject;

var StyledModalOverlay = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  position: fixed;\n  top: var(--spacer-size-0-rem);\n  right: var(--spacer-size-0-rem);\n  bottom: var(--spacer-size-0-rem);\n  left: var(--spacer-size-0-rem);\n  background-color: var(--color-neutral-1100);\n  opacity: ',
      ';\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark' ? '90%' : '40%';
  },
);

var propTypes = {
  onHide: _propTypes.func,
};

var ModalOverlay = function ModalOverlay(_ref2) {
  var onHide = _ref2.onHide;
  return /*#__PURE__*/ _react['default'].createElement(StyledModalOverlay, {
    onClick: onHide,
  });
};

ModalOverlay.propTypes = propTypes;
var _default = ModalOverlay;
exports['default'] = _default;
