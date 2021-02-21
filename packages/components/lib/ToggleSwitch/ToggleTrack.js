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

var ToggleTrack = _styledComponents['default'].span(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  position: relative;\n  display: inline-block;\n  width: 2.5rem;\n  height: 1.5rem;\n  border-radius: 2.125rem;\n  outline: 0;\n',
    ])),
);

var _default = ToggleTrack;
exports['default'] = _default;
