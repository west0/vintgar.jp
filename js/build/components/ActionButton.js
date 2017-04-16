'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionButton = function ActionButton(props) {
  var buttonTypeClass = props.buttonType === 'main' ? 'button-main' : 'button-sub';
  return _react2.default.createElement(
    'button',
    {
      id: props.buttonId,
      className: buttonTypeClass,
      type: 'button'
    },
    props.label
  );
};

exports.default = ActionButton;