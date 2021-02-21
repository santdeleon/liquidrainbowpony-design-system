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

var ToggleThumb = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -0.25rem;\n  left: -0.1875rem;\n  width: 1.7rem;\n  height: 1.7rem;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: transform 0.3s cubic-bezier(0.4, 0.03, 0, 1);\n',
    ])),
);

var _default = ToggleThumb;
exports['default'] = _default;
