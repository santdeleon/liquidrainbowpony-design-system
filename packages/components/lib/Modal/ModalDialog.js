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

var propTypes = {
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.object,
    _propTypes.array,
    _propTypes.func,
  ]),
};

var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
    props = (0, _objectWithoutProperties2['default'])(_ref, ['children']);
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    (0, _extends2['default'])(
      {
        role: 'document',
      },
      props,
    ),
    children,
  );
};

ModalDialog.propTypes = propTypes;
var _default = ModalDialog;
exports['default'] = _default;
