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

var _react = _interopRequireWildcard(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _hooks = require('@liquidrainbowpony/hooks');

var _templateObject;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

var StyledButtonDropdownMenu = _styledComponents.default.div(
  _templateObject ||
    (_templateObject = _taggedTemplateLiteral([
      '\n  outline: 0;\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: var(--spacer-size-400-rem);\n  flex-direction: column;\n  text-align: ',
      ';\n  width: ',
      ';\n  color: ',
      ';\n  background-color: ',
      ';\n  border: 2px solid\n    ',
      ";\n  border-radius: 0.5rem;\n  &:before {\n    content: '';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -0.6875rem;\n    border: 0.6875rem solid transparent;\n    border-bottom-color: ",
      ";\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -0.5rem;\n    border-width: 0.5rem;\n    border-style: solid;\n    border-color: ",
      ';\n  }\n',
    ])),
  function (_ref) {
    var align = _ref.align;
    return align ? align : 'center';
  },
  function (_ref2) {
    var width = _ref2.width;
    return width ? width : '12rem';
  },
  function (_ref3) {
    var theme = _ref3.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-100)'
      : 'var(--color-neutral-900)';
  },
  function (_ref4) {
    var theme = _ref4.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-900)'
      : 'var(--color-neutral-0)';
  },
  function (_ref5) {
    var theme = _ref5.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
  function (_ref6) {
    var theme = _ref6.theme;
    return theme.mode === 'dark'
      ? 'var(--color-neutral-1100)'
      : 'var(--color-neutral-200)';
  },
  function (_ref7) {
    var theme = _ref7.theme;
    return theme.mode === 'dark'
      ? 'transparent transparent var(--color-neutral-900) transparent'
      : 'transparent transparent  var(--color-neutral-0) transparent';
  },
);

var propTypes = {
  id: _propTypes.string.isRequired,
  show: _propTypes.bool.isRequired,
  setShow: _propTypes.func.isRequired,
  ariaDescribedBy: _propTypes.string,
  ariaLabel: _propTypes.string,
  children: (0, _propTypes.oneOfType)([
    _propTypes.string,
    _propTypes.object,
    _propTypes.array,
    _propTypes.func,
  ]),
};

var ButtonDropdownMenu = function ButtonDropdownMenu(_ref8) {
  var id = _ref8.id,
    show = _ref8.show,
    setShow = _ref8.setShow,
    ariaDescribedBy = _ref8.ariaDescribedBy,
    ariaLabel = _ref8.ariaLabel,
    children = _ref8.children,
    props = _objectWithoutProperties(_ref8, [
      'id',
      'show',
      'setShow',
      'ariaDescribedBy',
      'ariaLabel',
      'children',
    ]);

  var ref = (0, _react.createRef)();
  (0, _hooks.useOnClickOutside)(ref, function () {
    return setShow(false);
  });
  if (!show) return null;
  return /*#__PURE__*/ _react.default.createElement(
    StyledButtonDropdownMenu,
    _extends(
      {
        ref: ref,
        show: show,
        id: id,
        tabindex: show ? '0' : '-1',
        'aria-hidden': !show,
        'aria-describedby': ariaDescribedBy,
        'aria-label': ariaLabel,
      },
      props,
    ),
    children,
  );
};

ButtonDropdownMenu.propTypes = propTypes;
var _default = ButtonDropdownMenu;
exports.default = _default;
