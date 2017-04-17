'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_Component) {
  _inherits(ContactForm, _Component);

  function ContactForm(props) {
    _classCallCheck(this, ContactForm);

    return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call(this, props));
  }

  _createClass(ContactForm, [{
    key: '_renderDialog',
    value: function _renderDialog() {
      console.log('_renderDialog()');
      return _react2.default.createElement(_Dialog2.default, {
        contactId: 'contact-confirm-dialog',
        contactName: null,
        contactMail: null,
        contactMessage: null
      });
    }
  }, {
    key: '_clearForm',
    value: function _clearForm() {
      console.log('_clearForm()');
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { id: 'contact-form', name: 'contact-form', className: 'page-component', onSubmit: function onSubmit(e) {
            e.preventDefault();
          } },
        _react2.default.createElement(
          'h3',
          { className: 'page-title' },
          'Contact Form'
        ),
        _react2.default.createElement(
          'p',
          { id: 'form-legends' },
          '*\xA0\u5FC5\u9808\u9805\u76EE'
        ),
        _react2.default.createElement(
          'ul',
          { id: 'contact-forms' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('input', { id: 'contact-name', ref: 'contactName', maxLength: '24', type: 'text' }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'contact-name' },
              'name\xA0*'
            ),
            _react2.default.createElement(
              'p',
              { className: 'contact-note' },
              '24\u6587\u5B57'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('input', { id: 'contact-mail', ref: 'contactMail', maxLength: '48', type: 'email' }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'contact-mail' },
              'e-mail\xA0*'
            ),
            _react2.default.createElement(
              'p',
              { className: 'contact-note' },
              '\u534A\u89D248\u6587\u5B57'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement('textarea', { id: 'contact-message', ref: 'contactMessage', maxLength: '256' }),
            _react2.default.createElement(
              'label',
              { htmlFor: 'contact-message' },
              'message\xA0*'
            ),
            _react2.default.createElement(
              'p',
              { className: 'contact-note' },
              '128\u6587\u5B57'
            )
          )
        ),
        _react2.default.createElement(
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
                console.log(_reactDom2.default.findDOMNode(_this2.refs.contactName).value);
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
                console.log(_reactDom2.default.findDOMNode(_this2.refs.contactMail).value);
              }
            },
            'SEND'
          )
        ),
        _react2.default.createElement(
          'p',
          null,
          'If you will not get any replies in two days, send messages again.'
        )
      );
    }
  }]);

  return ContactForm;
}(_react.Component);

exports.default = ContactForm;