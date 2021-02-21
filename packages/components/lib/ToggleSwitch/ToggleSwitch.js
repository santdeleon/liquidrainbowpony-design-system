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

var StyledToggleSwitch = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  ',
      ' {\n    border-style: solid;\n    border-width: 0.1875rem;\n    border-color: ',
      ';\n    background-color: ',
      ';\n  }\n  ',
      ' {\n    transform: ',
      ';\n    border-style: solid;\n    border-width: 0.1875rem;\n    border-color: ',
      ';\n    background-color: ',
      ';\n  }\n',
    ])),
  _.ToggleTrack,
  function (_ref) {
    var on = _ref.on;
    return on === 'true'
      ? 'var(--color-green-900)'
      : 'var(--color-neutral-400)';
  },
  function (_ref2) {
    var on = _ref2.on;
    return on === 'true'
      ? 'var(--color-green-1000)'
      : 'var(--color-neutral-200)';
  },
  _.ToggleThumb,
  function (_ref3) {
    var on = _ref3.on;
    return on === 'true' ? 'translateX(18px)' : 'translateX(-2px)';
  },
  function (_ref4) {
    var on = _ref4.on;
    return on === 'true'
      ? 'var(--color-green-900)'
      : 'var(--color-neutral-400)';
  },
  function (_ref5) {
    var on = _ref5.on;
    return on === 'true' ? 'var(--color-green-700)' : 'var(--color-neutral-0)';
  },
);

var propTypes = {
  id: _propTypes.string.isRequired,
  title: _propTypes.string,
  ariaLabel: _propTypes.string.isRequired,
  onClick: _propTypes.func.isRequired,
  on: _propTypes.string.isRequired,
  children: (0, _propTypes.oneOfType)([
    _propTypes.array,
    _propTypes.object,
    _propTypes.func,
  ]),
};

var ToggleSwitch = function ToggleSwitch(_ref6) {
  var id = _ref6.id,
    title = _ref6.title,
    ariaLabel = _ref6.ariaLabel,
    onClick = _ref6.onClick,
    on = _ref6.on,
    children = _ref6.children,
    props = (0, _objectWithoutProperties2['default'])(_ref6, [
      'id',
      'title',
      'ariaLabel',
      'onClick',
      'on',
      'children',
    ]);
  return /*#__PURE__*/ _react['default'].createElement(
    StyledToggleSwitch,
    (0, _extends2['default'])(
      {
        id: id,
        on: on,
      },
      props,
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _.ToggleTrack,
      null,
      /*#__PURE__*/ _react['default'].createElement(
        _.ToggleThumb,
        {
          role: 'checkbox',
          title: title,
          'aria-label': ariaLabel,
          'aria-checked': on,
          onClick: onClick,
        },
        children,
      ),
    ),
  );
};

ToggleSwitch.propTypes = propTypes;
var _default = ToggleSwitch;
exports['default'] = _default;
