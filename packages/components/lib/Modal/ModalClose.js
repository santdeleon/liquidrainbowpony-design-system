Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

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

var StyledModalClose = _styledComponents.default.button(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  cursor: pointer;\n  font-size: var(--typography-size-300-rem);\n  color: var(--color-neutral-700);\n  &:hover {\n    color: ',
      ';\n  }\n',
    ])),
  function (_ref) {
    var theme = _ref.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-600)'
      : 'var(--color-neutral-900)';
  },
);

var propTypes = {
  onClick: _propTypes.func.isRequired,
};

var ModalClose = function ModalClose(_ref2) {
  var onClick = _ref2.onClick;
  return /*#__PURE__*/ _react.default.createElement(StyledModalClose, {
    type: 'button',
    as: _reactFontawesome.FontAwesomeIcon,
    icon: _freeSolidSvgIcons.faTimes,
    'aria-label': 'Close',
    onClick: onClick,
  });
};

ModalClose.propTypes = propTypes;
var _default = ModalClose;
exports.default = _default;
