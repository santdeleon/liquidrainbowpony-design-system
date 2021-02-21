Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _ = require('.');

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

var propTypes = {
  fontSize: _propTypes.number,
  fontWeight: _propTypes.string,
  children: (0, _propTypes.oneOfType)([
    _propTypes.array,
    _propTypes.object,
    _propTypes.string,
    _propTypes.func,
  ]),
};

var Text = function Text(_ref) {
  var fontSize = _ref.fontSize,
    fontWeight = _ref.fontWeight,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, [
      'fontSize',
      'fontWeight',
      'children',
    ]);

  switch (true) {
    case fontSize === 1200:
      return /*#__PURE__*/ _react.default.createElement(
        _.Display1,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 1100:
      return /*#__PURE__*/ _react.default.createElement(
        _.Display2,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 1000:
      return /*#__PURE__*/ _react.default.createElement(
        _.Display3,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 900:
      return /*#__PURE__*/ _react.default.createElement(
        _.H1,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 800:
      return /*#__PURE__*/ _react.default.createElement(
        _.H2,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 700:
      return /*#__PURE__*/ _react.default.createElement(
        _.H3,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 600:
      return /*#__PURE__*/ _react.default.createElement(
        _.H4,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 500:
      return /*#__PURE__*/ _react.default.createElement(
        _.H5,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 400:
      return /*#__PURE__*/ _react.default.createElement(
        _.PLeadLarge,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 300:
      return /*#__PURE__*/ _react.default.createElement(
        _.PLead,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 200:
      return /*#__PURE__*/ _react.default.createElement(
        _.P,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 100:
      return /*#__PURE__*/ _react.default.createElement(
        _.Small,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    default:
      return /*#__PURE__*/ _react.default.createElement(
        _.P,
        _extends(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );
  }
};

Text.propTypes = propTypes;
var _default = Text;
exports.default = _default;
