'use strict';

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard');

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ThemeProvider = exports.ThemeContext = void 0;

var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray'),
);

var _react = _interopRequireWildcard(require('react'));

var _styledComponents = require('styled-components');

var _propTypes = require('prop-types');

var _hooks = require('@liquidrainbowpony/hooks');

var ThemeContext = /*#__PURE__*/ (0, _react.createContext)();
exports.ThemeContext = ThemeContext;

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children;
  var prefersOSDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

  var _useLocalStorage = (0, _hooks.useLocalStorage)(
      'theme',
      prefersOSDarkTheme ? 'dark' : 'light',
    ),
    _useLocalStorage2 = (0, _slicedToArray2['default'])(_useLocalStorage, 2),
    theme = _useLocalStorage2[0],
    setTheme = _useLocalStorage2[1];

  var toggleTheme = function toggleTheme() {
    return setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return /*#__PURE__*/ _react['default'].createElement(
    ThemeContext.Provider,
    {
      value: {
        theme: theme,
        toggleTheme: toggleTheme,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.ThemeProvider,
      {
        theme: {
          mode: theme,
        },
      },
      children,
    ),
  );
};

exports.ThemeProvider = ThemeProvider;
ThemeProvider.propTypes = {
  children: (0, _propTypes.oneOfType)([
    _propTypes.array,
    _propTypes.object,
    _propTypes.func,
  ]),
};
