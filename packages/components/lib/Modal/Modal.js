'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _ = require('.');

var _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  );
}

var StyledModal = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
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
    props = _objectWithoutProperties(_ref, [
      'id',
      'show',
      'ariaDescribedBy',
      'ariaLabel',
      'onHide',
      'children',
    ]);

  if (!show) return null;
  return /*#__PURE__*/ _react.default.createElement(
    StyledModal,
    _extends(
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
    /*#__PURE__*/ _react.default.createElement(_.ModalOverlay, {
      onHide: onHide,
    }),
    children,
  );
};

Modal.propTypes = propTypes;
var _default = Modal;
exports.default = _default;
