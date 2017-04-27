'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('nodemailer');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _ConfirmDialog = require('../containers/ConfirmDialog');

var _ConfirmDialog2 = _interopRequireDefault(_ConfirmDialog);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactForm = function (_Component) {
  _inherits(ContactForm, _Component);

  function ContactForm() {
    _classCallCheck(this, ContactForm);

    return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).apply(this, arguments));
  }

  _createClass(ContactForm, [{
    key: '_onClear',
    value: function _onClear(e) {
      this.refs.contactMailAddr.value = '';
      this.refs.contactMessage.value = '';
      this.props.dispatch((0, _actions.clearForm)());
    }
  }, {
    key: '_onConfirm',
    value: function _onConfirm(e) {
      this.props.dispatch((0, _actions.confirmContact)(this.refs.contactMailAddr.value, this.refs.contactMessage.value));
    }
  }, {
    key: '_renderDialog',
    value: function _renderDialog() {
      switch (this.props.state.contacts.contactState) {
        case 'confirm':
        case 'sending':
        case 'complete':
        case 'error':
          return _react2.default.createElement(_ConfirmDialog2.default, null);

        default:
          return null;
      }
    }
  }, {
    key: '_checkValue',
    value: function _checkValue(event) {
      var type = event.target.name;
      var val = event.target.value.trim();
      switch (type) {
        case 'contact-mail':
          var mailAddrState = 'complete';
          if (val === '') {
            mailAddrState = 'null-error';
          } else if (/[^\x01-\x7E\xA1-\xDF]/.test(val)) {
            mailAddrState = 'mb-error';
          }
          this.props.dispatch((0, _actions.updateMailAddrState)(mailAddrState));
          return null;

        case 'contact-message':
          var messageState = 'complete';
          if (val === '') {
            messageState = 'null-error';
          }
          this.props.dispatch((0, _actions.updateMessageState)(messageState));
          return null;

        default:
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var inputState = this.props.state.inputs.isMailAddrNullError !== undefined || this.props.state.inputs.isMailAddrMbError !== undefined || this.props.state.inputs.isMessageNullError !== undefined ? true : false;

      var isMailAddrNullError = this.props.state.inputs.isMailAddrNullError === undefined ? true : this.props.state.inputs.isMailAddrNullError;
      var isMailAddrMbError = this.props.state.inputs.isMailAddrMbError === undefined ? false : this.props.state.inputs.isMailAddrMbError;
      var isMessageNullError = this.props.state.inputs.isMessageNullError === undefined ? true : this.props.state.inputs.isMessageNullError;

      var classNameForContactMailAddr = (0, _classnames2.default)({ 'form-err': false });
      var classNameForContactMessage = (0, _classnames2.default)({ 'form-err': false });
      var classNameForConfirmButton = (0, _classnames2.default)({ 'button-main': false, 'button-disabled': true });
      var isConfirmButtonDisabled = true;

      if (inputState) {
        if (isMailAddrNullError) {
          classNameForContactMailAddr = (0, _classnames2.default)({ 'form-err': true });
        }

        if (isMessageNullError) {
          classNameForContactMessage = (0, _classnames2.default)({ 'form-err': true });
        }
      }

      if (!isMailAddrNullError && !isMailAddrMbError && !isMessageNullError) {
        classNameForContactMailAddr = (0, _classnames2.default)({ 'form-err': false });
        classNameForContactMessage = (0, _classnames2.default)({ 'form-err': false });
        classNameForConfirmButton = (0, _classnames2.default)({
          'button-main': true,
          'button-disabled': false
        });
        isConfirmButtonDisabled = false;
      }

      if (this.props.state.contacts.contactState === 'complete') {
        this.refs.contactMailAddr.value = '';
        this.refs.contactMessage.value = '';
      }

      return _react2.default.createElement(
        'div',
        { id: 'contact-form', className: 'page-component' },
        _react2.default.createElement(
          'form',
          { name: 'contact-form', onSubmit: function onSubmit(e) {
              e.preventDefault();
            } },
          _react2.default.createElement(
            'h3',
            { className: 'page-title' },
            'contact form'
          ),
          _react2.default.createElement(
            'div',
            { id: 'contact-notes' },
            _react2.default.createElement(
              'ul',
              { id: 'contact-note' },
              _react2.default.createElement(
                'li',
                null,
                'e-mail, message\u306B\u500B\u4EBA\u60C5\u5831\u30FB\u6A5F\u5BC6\u60C5\u5831\u3092\u542B\u307E\u305A\u306B\u3054\u9023\u7D61\u304F\u3060\u3055\u3044\u3002'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Gmail\u304C\u53D7\u4FE1\u53EF\u80FD\u306A\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044\u3002'
              )
            )
          ),
          _react2.default.createElement(
            'p',
            { id: 'form-legends' },
            '*\xA0\u5FC5\u9808\u9805\u76EE'
          ),
          _react2.default.createElement(
            'ul',
            { id: 'input-forms' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('input', {
                id: 'contact-mail',
                className: classNameForContactMailAddr,
                name: 'contact-mail',
                ref: 'contactMailAddr',
                maxLength: '48',
                type: 'email',
                onChange: function onChange(e) {
                  _this2._checkValue(e);
                },
                onBlur: function onBlur(e) {
                  _this2._checkValue(e);
                }
              }),
              _react2.default.createElement(
                'label',
                { htmlFor: 'contact-mail' },
                'e-mail\xA0*'
              ),
              _react2.default.createElement(
                'p',
                { className: 'input-note' },
                '\u534A\u89D248\u6587\u5B57',
                inputState && isMailAddrNullError ? _react2.default.createElement(
                  'span',
                  { className: 'input-err' },
                  '\xA0\u5FC5\u9808\u9805\u76EE\u3067\u3059\u3002'
                ) : null,
                inputState && isMailAddrMbError ? _react2.default.createElement(
                  'span',
                  { className: 'input-err' },
                  '\xA0\u534A\u89D2\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002'
                ) : null
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement('textarea', {
                id: 'contact-message',
                className: classNameForContactMessage,
                name: 'contact-message',
                ref: 'contactMessage',
                maxLength: '200',
                onChange: function onChange(e) {
                  _this2._checkValue(e);
                },
                onBlur: function onBlur(e) {
                  _this2._checkValue(e);
                }
              }),
              _react2.default.createElement(
                'label',
                { htmlFor: 'contact-message' },
                'message\xA0*'
              ),
              _react2.default.createElement(
                'p',
                { className: 'input-note' },
                '200\u6587\u5B57',
                inputState && isMessageNullError ? _react2.default.createElement(
                  'span',
                  { className: 'input-err' },
                  '\xA0\u5FC5\u9808\u9805\u76EE\u3067\u3059\u3002'
                ) : null
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
                  _this2._onClear(e);
                }
              },
              'CLEAR'
            ),
            _react2.default.createElement(
              'button',
              {
                id: 'button-submit',
                className: classNameForConfirmButton,
                ref: 'confirmButton',
                type: 'button',
                onClick: function onClick(e) {
                  _this2._onConfirm(e);
                },
                disabled: isConfirmButtonDisabled
              },
              'CONFIRM'
            )
          )
        ),
        this._renderDialog()
      );
    }
  }]);

  return ContactForm;
}(_react.Component);

var selector = function selector(state) {
  return { state: state };
};

exports.default = (0, _reactRedux.connect)(selector)(ContactForm);