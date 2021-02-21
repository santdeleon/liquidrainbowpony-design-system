'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _slicedToArray2 = _interopRequireDefault(
  require('@babel/runtime/helpers/slicedToArray'),
);

var _react = require('react');

var useLocalStorage = function useLocalStorage(key) {
  var defaultValue =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var _ref =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
    _ref$serialize = _ref.serialize,
    serialize = _ref$serialize === void 0 ? JSON.stringify : _ref$serialize,
    _ref$deserialize = _ref.deserialize,
    deserialize = _ref$deserialize === void 0 ? JSON.parse : _ref$deserialize;

  var _useState = (0, _react.useState)(function () {
      var valueInLocalStorage = window.localStorage.getItem(key);

      if (valueInLocalStorage) {
        try {
          return deserialize(valueInLocalStorage);
        } catch (error) {
          window.localStorage.removeItem(key);
        }
      }

      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }),
    _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];

  var prevKeyRef = (0, _react.useRef)(key);
  (0, _react.useEffect)(
    function () {
      var prevKey = prevKeyRef.current;

      if (prevKey !== key) {
        window.localStorage.removeItem(prevKey);
      }

      prevKeyRef.current = key;
      window.localStorage.setItem(key, serialize(state));
    },
    [key, state, serialize],
  );
  return [state, setState];
};

var _default = useLocalStorage;
exports['default'] = _default;
