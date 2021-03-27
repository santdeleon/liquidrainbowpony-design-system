'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _templateObject,
  _templateObject2,
  _templateObject3,
  _templateObject4,
  _templateObject5,
  _templateObject6,
  _templateObject7,
  _templateObject8,
  _templateObject9,
  _templateObject10;

var Container = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  padding: var(--spacer-size-0-rem) var(--spacer-size-400-rem);\n  margin: var(--spacer-size-0-rem) auto;\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n  ',
      '\n',
    ])),
  function (_ref) {
    var theme = _ref.theme,
      fluid = _ref.fluid;
    return theme.media.greaterThan('xxxs')(
      _templateObject2 ||
        (_templateObject2 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '320px';
      },
    );
  },
  function (_ref2) {
    var theme = _ref2.theme,
      fluid = _ref2.fluid;
    return theme.media.greaterThan('xxs')(
      _templateObject3 ||
        (_templateObject3 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '375px';
      },
    );
  },
  function (_ref3) {
    var theme = _ref3.theme,
      fluid = _ref3.fluid;
    return theme.media.greaterThan('xs')(
      _templateObject4 ||
        (_templateObject4 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '425px';
      },
    );
  },
  function (_ref4) {
    var theme = _ref4.theme,
      fluid = _ref4.fluid;
    return theme.media.greaterThan('sm')(
      _templateObject5 ||
        (_templateObject5 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '576px';
      },
    );
  },
  function (_ref5) {
    var theme = _ref5.theme,
      fluid = _ref5.fluid;
    return theme.media.greaterThan('md')(
      _templateObject6 ||
        (_templateObject6 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '768px';
      },
    );
  },
  function (_ref6) {
    var theme = _ref6.theme,
      fluid = _ref6.fluid;
    return theme.media.greaterThan('lg')(
      _templateObject7 ||
        (_templateObject7 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '992px';
      },
    );
  },
  function (_ref7) {
    var theme = _ref7.theme,
      fluid = _ref7.fluid;
    return theme.media.greaterThan('xl')(
      _templateObject8 ||
        (_templateObject8 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '1024px';
      },
    );
  },
  function (_ref8) {
    var theme = _ref8.theme,
      fluid = _ref8.fluid;
    return theme.media.greaterThan('xxl')(
      _templateObject9 ||
        (_templateObject9 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '1440px';
      },
    );
  },
  function (_ref9) {
    var theme = _ref9.theme,
      fluid = _ref9.fluid;
    return theme.media.greaterThan('xxxl')(
      _templateObject10 ||
        (_templateObject10 = (0, _taggedTemplateLiteral2['default'])([
          '\n    max-width: ',
          '\n  ',
        ])),
      function () {
        return !fluid && '2560px';
      },
    );
  },
);

var _default = Container;
exports['default'] = _default;
