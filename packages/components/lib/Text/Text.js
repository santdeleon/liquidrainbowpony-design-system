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

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _ = require('.');

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
    props = (0, _objectWithoutProperties2['default'])(_ref, [
      'fontSize',
      'fontWeight',
      'children',
    ]);

  switch (true) {
    case fontSize === 1200:
      return /*#__PURE__*/ _react['default'].createElement(
        _.Display1,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 1100:
      return /*#__PURE__*/ _react['default'].createElement(
        _.Display2,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 1000:
      return /*#__PURE__*/ _react['default'].createElement(
        _.Display3,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 900:
      return /*#__PURE__*/ _react['default'].createElement(
        _.H1,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 800:
      return /*#__PURE__*/ _react['default'].createElement(
        _.H2,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 700:
      return /*#__PURE__*/ _react['default'].createElement(
        _.H3,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 600:
      return /*#__PURE__*/ _react['default'].createElement(
        _.H4,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 500:
      return /*#__PURE__*/ _react['default'].createElement(
        _.H5,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 400:
      return /*#__PURE__*/ _react['default'].createElement(
        _.PLeadLarge,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 300:
      return /*#__PURE__*/ _react['default'].createElement(
        _.PLead,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 200:
      return /*#__PURE__*/ _react['default'].createElement(
        _.P,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    case fontSize === 100:
      return /*#__PURE__*/ _react['default'].createElement(
        _.Small,
        (0, _extends2['default'])(
          {
            fontWeight: fontWeight,
          },
          props,
        ),
        children,
      );

    default:
      return /*#__PURE__*/ _react['default'].createElement(
        _.P,
        (0, _extends2['default'])(
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
exports['default'] = _default;
