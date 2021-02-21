'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
  require('@babel/runtime/helpers/taggedTemplateLiteral'),
);

var _react = _interopRequireDefault(require('react'));

var _propTypes = require('prop-types');

var _styledComponents = _interopRequireDefault(require('styled-components'));

var _templateObject;

var StyledModalScreenReaderText = _styledComponents['default'].div(
  _templateObject ||
    (_templateObject = (0, _taggedTemplateLiteral2['default'])([
      '\n  display: none;\n',
    ])),
);

var propTypes = {
  title: _propTypes.string.isRequired,
};

var ModalScreenReaderText = function ModalScreenReaderText(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/ _react['default'].createElement(
    StyledModalScreenReaderText,
    null,
    'This is a dialog window which overlays the main content of the page. The modal begins with a heading 2 titled "',
    title,
    '". Pressing the Modal close button at the top right hand side of the modal will close the modal and bring you back to where you were on the page.',
  );
};

ModalScreenReaderText.propTypes = propTypes;
var _default = ModalScreenReaderText;
exports['default'] = _default;
