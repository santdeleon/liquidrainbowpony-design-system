'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _react = require('react');

var _theme = require('@liquidrainbowpony/theme');

var useTheme = function useTheme() {
  var context = (0, _react.useContext)(_theme.ThemeContext);
  if (!context) throw new Error('You must useTheme within a <ThemeProvider />');
  return context;
};

var _default = useTheme;
exports['default'] = _default;
