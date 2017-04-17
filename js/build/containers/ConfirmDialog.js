'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmDialog = function (_Component) {
  _inherits(ConfirmDialog, _Component);

  function ConfirmDialog() {
    _classCallCheck(this, ConfirmDialog);

    return _possibleConstructorReturn(this, (ConfirmDialog.__proto__ || Object.getPrototypeOf(ConfirmDialog)).apply(this, arguments));
  }

  _createClass(ConfirmDialog, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('remove_dialog-modal-open');
      document.body.classList.remove('dialog-modal-open');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('componentDidMount');
      if (this.props.state.contacts.contactState === 'confirm') {
        console.log('add_dialog-modal-open');
        document.body.classList.add('dialog-modal-open');
      }
    }
  }, {
    key: '_onCancel',
    value: function _onCancel(e) {
      this.props.dispatch((0, _actions.cancelDialog)());
    }
  }, {
    key: '_onSend',
    value: function _onSend(e) {
      this.props.dispatch((0, _actions.sendMail)(this.props.state.contacts.contactName, this.props.state.contacts.contactMailAddr, this.props.state.contacts.contactMessage));
    }
  }, {
    key: '_renderDialog',
    value: function _renderDialog() {
      switch (this.props.state.contacts.contactState) {
        case 'complete':
          return this._renderConfirmDialog();

        default:
          return this._renderConfirmDialog(this.props.state.contacts.contactState);
      }
    }
  }, {
    key: '_renderConfirmDialog',
    value: function _renderConfirmDialog(contactState) {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { id: 'confirm-dialog', className: 'dialog-modal',
          onSubmit: function onSubmit(e) {
            e.preventDefault();
          }
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'dialog-header' },
            _react2.default.createElement(
              'div',
              { className: 'close-button',
                onClick: function onClick(e) {
                  _this2._onCancel(e);
                }
              },
              'X'
            )
          ),
          contactState === 'error' ? _react2.default.createElement(
            'p',
            { className: 'dialog-description dialog-error-message' },
            '\u9001\u4FE1\u6642\u306B\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F\u3002\u518D\u5EA6\u9001\u4FE1\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3044\u305F\u3060\u304F\u304B\u3001\u3057\u3070\u3089\u304F\u5F85\u3063\u3066\u304B\u3089\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002'
          ) : null,
          _react2.default.createElement(
            'p',
            { className: 'dialog-description' },
            '\u4EE5\u4E0B\u306E\u5185\u5BB9\u3067\u9001\u4FE1\u3057\u307E\u3059\u3002'
          ),
          _react2.default.createElement(
            'dl',
            { className: 'dialog-contents' },
            _react2.default.createElement(
              'dt',
              null,
              'e-mail'
            ),
            _react2.default.createElement(
              'dd',
              null,
              this.props.state.contacts.contactMailAddr
            ),
            _react2.default.createElement(
              'dt',
              null,
              'message'
            ),
            _react2.default.createElement(
              'dd',
              { className: 'dialog-message' },

              /*this.props.state.contacts.contactMessage*/
              this.props.state.contacts.contactMessage.split('\n').map(function (m, idx) {
                return _react2.default.createElement(
                  'p',
                  { key: idx },
                  m
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'dialog-buttons' },
          _react2.default.createElement(
            'button',
            {
              id: 'button-cancel',
              className: 'button-sub',
              type: 'button',
              onClick: function onClick(e) {
                _this2._onCancel(e);
              }
            },
            'CANCEL'
          ),
          _react2.default.createElement(
            'button',
            {
              id: 'button-send',
              className: 'button-main',
              type: 'button',
              onClick: function onClick(e) {
                _this2._onSend(e);
              }
            },
            'SEND'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'dialog-container' },
        this._renderDialog()
      );
    }
  }]);

  return ConfirmDialog;
}(_react.Component);

var selector = function selector(state) {
  return { state: state };
};

exports.default = (0, _reactRedux.connect)(selector)(ConfirmDialog);