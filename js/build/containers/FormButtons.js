'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _ContactForm = require('../components/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormButtons = function FormButtons(_ref) {
  var dispatch = _ref.dispatch;

  return _react2.default.createElement(
    'div',
    { id: 'form-buttons' },
    _react2.default.createElement(
      'button',
      {
        id: 'button-clear',
        className: 'button-sub',
        type: 'button',
        onClick: function onClick(e) {
          e.preventDefault();
          console.log(_reactDom2.default.findDOMNode(_ContactForm2.default.refs.contactMail).value);
          dispatch((0, _actions.clearForm)());
        }
      },
      'CLEAR'
    ),
    _react2.default.createElement(
      'button',
      {
        id: 'button-submit',
        className: 'button-main',
        type: 'button',
        onClick: function onClick(e) {
          e.preventDefault();
          console.log('click-send');
          dispatch((0, _actions.confirmContact)({/*
                                                 ReactDOM.findDOMNode(this.refs.contactName).value,
                                                 ReactDOM.findDOMNode(this.refs.contactMail).value,
                                                 ReactDOM.findDOMNode(this.refs.contactMessage).value
                                                 */}));
        }
      },
      'SEND'
    )
  );
};

FormButtons = (0, _reactRedux.connect)()(FormButtons);

exports.default = FormButtons;