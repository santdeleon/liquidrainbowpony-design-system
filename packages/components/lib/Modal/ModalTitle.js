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

var _Text = require('../Text');

var _templateObject;

var ModalTitle = (0, _styledComponents['default'])(_Text.H4)(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  font-weight: var(--typography-weight-medium);\n  margin: var(--spacer-size-0-rem);\n',
    ])),
);
var _default = ModalTitle;
exports['default'] = _default;
