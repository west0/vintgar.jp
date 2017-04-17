'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _ConfirmDialog = require('../containers/ConfirmDialog');

var _ConfirmDialog2 = _interopRequireDefault(_ConfirmDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//import ReactDOM from 'react-dom';


var ContactForm = function (_Component) {
  _inherits(ContactForm, _Component);

  function ContactForm() {
    _classCallCheck(this, ContactForm);

    return _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).apply(this, arguments));
  }

  _createClass(ContactForm, [{
    key: '_onClear',
    value: function _onClear(e) {
      //    console.log(this.refs.contactName.value ? this.refs.contactName.value : 'onClear()');
      this.refs.contactName.value = '';
      this.refs.contactMailAddr.value = '';
      this.refs.contactMessage.value = '';
      this.props.dispatch((0, _actions.clearForm)());
    }
  }, {
    key: '_onConfirm',
    value: function _onConfirm(e) {
      //    console.log('onConfirm()');
      this.props.dispatch((0, _actions.confirmContact)('(名前は表示されません)', this.refs.contactMailAddr.value, this.refs.contactMessage.value));
    }
  }, {
    key: '_renderDialog',
    value: function _renderDialog() {
      //    console.log('state: ' + this.props.state.contacts.contactState);
      switch (this.props.state.contacts.contactState) {
        case 'confirm':
        case 'error':
          //        console.log('_renderDialog.CONFIRM');
          return _react2.default.createElement(_ConfirmDialog2.default, null);

        default:
          //        console.log('_renderDialog.default');
          return null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
            'Contact Form'
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
              _react2.default.createElement('input', { id: 'contact-mail', ref: 'contactMailAddr', maxLength: '48', type: 'email' }),
              _react2.default.createElement(
                'label',
                { htmlFor: 'contact-mail' },
                'e-mail\xA0*'
              ),
              _react2.default.createElement(
                'p',
                { className: 'input-note' },
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
                { className: 'input-note' },
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
                  _this2._onClear(e);
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
                  _this2._onConfirm(e);
                }
              },
              'CONFIRM'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            'If you will not get any replies in two days, send messages again.'
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