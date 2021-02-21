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

var _templateObject;

var Container = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  padding: var(--spacer-size-0-rem) var(--spacer-size-400-rem);\n  margin: var(--spacer-size-0-rem) auto;\n  @media (min-width: 576px) {\n    ',
      '\n  }\n  @media (min-width: 768px) {\n    ',
      '\n  }\n  @media (min-width: 992px) {\n    ',
      '\n  }\n  @media (min-width: 1200px) {\n    ',
      '\n  }\n  @media (min-width: 1400px) {\n    ',
      '\n  }\n',
    ])),
  function (_ref) {
    var fluid = _ref.fluid;
    return !fluid && 'max-width: 540px';
  },
  function (_ref2) {
    var fluid = _ref2.fluid;
    return !fluid && 'max-width: 720px';
  },
  function (_ref3) {
    var fluid = _ref3.fluid;
    return !fluid && 'max-width: 960px';
  },
  function (_ref4) {
    var fluid = _ref4.fluid;
    return !fluid && 'max-width: 1140px';
  },
  function (_ref5) {
    var fluid = _ref5.fluid;
    return !fluid && 'max-width: 1320px';
  },
);

var _default = Container;
exports['default'] = _default;
