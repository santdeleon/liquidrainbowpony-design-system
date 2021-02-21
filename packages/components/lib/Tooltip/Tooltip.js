'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireWildcard(require('styled-components'));

var _templateObject;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

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

var TooltipBase = _styledComponents.default.span(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  visibility: hidden;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  z-index: 1;\n  outline: 0;\n  width: ',
      ';\n  padding: var(--spacer-size-400-rem);\n  font-weight: var(--typography-weight-medium);\n  color: ',
      ';\n  background-color: ',
      ';\n  border: 0.125rem solid\n    ',
      ';\n  border-radius: 0.5rem;\n',
    ])),
  function (_ref) {
    var width = _ref.width;
    return width ? width : '10rem';
  },
  function (_ref2) {
    var theme = _ref2.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)';
  },
  function (_ref4) {
    var theme = _ref4.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
);

var propTypes = {
  ariaLabel: _propTypes.string.isRequired,
  children: (0, _propTypes.oneOfType)([
    _propTypes.array,
    _propTypes.object,
    _propTypes.string,
    _propTypes.func,
  ]),
};

var Tooltip = function Tooltip(_ref5) {
  var ariaLabel = _ref5.ariaLabel,
    children = _ref5.children,
    props = _objectWithoutProperties(_ref5, ['ariaLabel', 'children']);

  return /*#__PURE__*/ _react.default.createElement(
    TooltipBase,
    _extends(
      {
        tabIndex: '-1',
        'aria-label': ariaLabel,
      },
      props,
    ),
    children,
  );
};

Tooltip.propTypes = propTypes;

var _default = (0, _styledComponents.withTheme)(Tooltip);

exports.default = _default;
