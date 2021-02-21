'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

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

var StyledModalOverlay = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
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
  return /*#__PURE__*/ _react.default.createElement(StyledModalOverlay, {
    onClick: onHide,
  });
};

ModalOverlay.propTypes = propTypes;
var _default = ModalOverlay;
exports.default = _default;
