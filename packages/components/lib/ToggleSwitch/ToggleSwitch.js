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

var StyledToggleSwitch = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
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
    props = _objectWithoutProperties(_ref6, [
      'id',
      'title',
      'ariaLabel',
      'onClick',
      'on',
      'children',
    ]);

  return /*#__PURE__*/ _react.default.createElement(
    StyledToggleSwitch,
    _extends(
      {
        id: id,
        on: on,
      },
      props,
    ),
    /*#__PURE__*/ _react.default.createElement(
      _.ToggleTrack,
      null,
      /*#__PURE__*/ _react.default.createElement(
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
exports.default = _default;
