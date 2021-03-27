'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports[
  'default'
] = exports.BREAKPOINT_XXXL = exports.BREAKPOINT_XXL = exports.BREAKPOINT_XL = exports.BREAKPOINT_LG = exports.BREAKPOINT_MD = exports.BREAKPOINT_SM = exports.BREAKPOINT_XS = exports.BREAKPOINT_XXS = exports.BREAKPOINT_XXXS = void 0;

var _styledMediaQuery = require('styled-media-query');

var BREAKPOINT_XXXS = 320;
exports.BREAKPOINT_XXXS = BREAKPOINT_XXXS;
var BREAKPOINT_XXS = 375;
exports.BREAKPOINT_XXS = BREAKPOINT_XXS;
var BREAKPOINT_XS = 425;
exports.BREAKPOINT_XS = BREAKPOINT_XS;
var BREAKPOINT_SM = 576;
exports.BREAKPOINT_SM = BREAKPOINT_SM;
var BREAKPOINT_MD = 768;
exports.BREAKPOINT_MD = BREAKPOINT_MD;
var BREAKPOINT_LG = 992;
exports.BREAKPOINT_LG = BREAKPOINT_LG;
var BREAKPOINT_XL = 1024;
exports.BREAKPOINT_XL = BREAKPOINT_XL;
var BREAKPOINT_XXL = 1440;
exports.BREAKPOINT_XXL = BREAKPOINT_XXL;
var BREAKPOINT_XXXL = 2560;
exports.BREAKPOINT_XXXL = BREAKPOINT_XXXL;
var media = (0, _styledMediaQuery.generateMedia)({
  xxxs: ''.concat(BREAKPOINT_XXXS, 'px'),
  xxs: ''.concat(BREAKPOINT_XXS, 'px'),
  xs: ''.concat(BREAKPOINT_XS, 'px'),
  sm: ''.concat(BREAKPOINT_SM, 'px'),
  md: ''.concat(BREAKPOINT_MD, 'px'),
  lg: ''.concat(BREAKPOINT_LG, 'px'),
  xl: ''.concat(BREAKPOINT_XL, 'px'),
  xxl: ''.concat(BREAKPOINT_XXL, 'px'),
  xxxl: ''.concat(BREAKPOINT_XXXL, 'px'),
});
var _default = media;
exports['default'] = _default;
