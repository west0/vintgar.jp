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
      console.log('ConfirmDialog._onCancel()');
      this.props.dispatch((0, _actions.cancelDialog)(this.props.state.contacts.contactMailAddr, this.props.state.contacts.contactMessage));
    }
  }, {
    key: '_onSend',
    value: function _onSend(e) {
      console.log('ConfirmDialog._onSend()');
      this.props.dispatch((0, _actions.sendMail)(this.props.state.contacts.contactMailAddr, this.props.state.contacts.contactMessage));
    }
  }, {
    key: 'EncodeHTMLForm',
    value: function EncodeHTMLForm(data) {
      // encode post parameter
      console.log('EncodeHTMLForm()');
      var params = [];
      for (var name in data) {
        var value = data[name];
        var param = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        params.push(param);
      }
      return params.join('&').replace(/%20/g, '+');
    }
  }, {
    key: '_sendMail',
    value: function _sendMail(contactMailAddr, contactMessage) {
      var _this2 = this;

      console.log('ConfirmDialog._sendMail()');

      new Promise(function (resolve, reject) {
        console.log('Promise()');
        var request = new XMLHttpRequest();
        request.onload = function () {
          console.log('request.onload()');
          if (this.status === 200) {
            console.log('status === 200');
            console.log('data: ' + JSON.stringify(this.response));
            resolve(this.response);
          } else {
            console.log('status !== 200');
            reject(new Error(this.statusText));
          }
        };
        request.onerror = function () {
          console.log('onerror()');
          reject(new Error('XMLHttpRequest Error: ' + this.statusText));
        };
        request.open('POST', './mail.py', true);
        console.log('request.open()_complete');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        console.log('request.setRequestHeader()_complete');
        request.responseType = 'json';
        console.log('request.responseType_complete');
        request.send(_this2.EncodeHTMLForm({
          mailAddr: contactMailAddr,
          message: contactMessage
        }));
        console.log('request.send()_complete');
      }).then(function (data) {
        console.log('promise complete: ' + Object.keys(data).length);
        console.log('promise complete: ' + JSON.stringify(data));
        _this2.props.dispatch((0, _actions.completeInquiry)());
      }).catch(function () {
        console.log('promise error: ');
        _this2.props.dispatch((0, _actions.dispError)(contactMailAddr, contactMessage));
      });
    }
  }, {
    key: '_onClose',
    value: function _onClose(e) {
      console.log('ConfirmDialog._onClose()');

      this.props.dispatch((0, _actions.finishInquiry)());
    }
  }, {
    key: '_createDialog',
    value: function _createDialog(contactState) {
      console.log('ConfirmDialog._createDialog');
      switch (contactState) {
        case 'sending':
          console.log('ConfirmDialog._createDialog > contactState > sending');
          this._sendMail(this.props.state.contacts.contactMailAddr, this.props.state.contacts.contactMessage);
          console.log('_sendMail()_after');
          return this._renderDialog(contactState);

        default:
          console.log('ConfirmDialog._createDialog > contactState > default: ' + contactState);
          return this._renderDialog(contactState);
      }
    }
  }, {
    key: '_renderDialog',
    value: function _renderDialog(contactState) {
      var _this3 = this;

      console.log('_renderDialog()');
      switch (contactState) {
        case 'sending':
          console.log('ConfirmDialog._renderDialog > sending');
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'dialog-header' },
              _react2.default.createElement(
                'div',
                { className: 'close-button' },
                '\xA0'
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'dialog-description' },
              '\u9001\u4FE1\u3057\u3066\u3044\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'div',
              { className: 'dialog-loading' },
              _react2.default.createElement('img', { src: 'images/loading.svg', alt: '\u9001\u4FE1\u4E2D' })
            )
          );

        case 'complete':
          console.log('ConfirmDialog._renderDialog > finish');
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              { className: 'dialog-header' },
              _react2.default.createElement(
                'div',
                { className: 'close-button',
                  onClick: function onClick(e) {
                    _this3._onCancel(e);
                  }
                },
                'X'
              )
            ),
            _react2.default.createElement(
              'p',
              { className: 'dialog-description' },
              '\u304A\u554F\u3044\u5408\u308F\u305B\u3092\u9001\u4FE1\u3057\u307E\u3057\u305F\u3002'
            ),
            _react2.default.createElement(
              'div',
              { className: 'dialog-buttons' },
              _react2.default.createElement(
                'button',
                {
                  id: 'button-send',
                  className: 'button-main',
                  type: 'button',
                  onClick: function onClick(e) {
                    _this3._onClose(e);
                  }
                },
                'CLOSE'
              )
            )
          );

        default:
          // contactState: confirm
          console.log('ConfirmDialog._renderDialog > default: ' + contactState + ' / ' + this.props.state.contacts.isSendError);
          return _react2.default.createElement(
            'form',
            {
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
                      _this3._onCancel(e);
                    }
                  },
                  'X'
                )
              ),
              this.props.state.contacts.isSendError === true ? _react2.default.createElement(
                'p',
                { className: 'dialog-description dialog-error-message' },
                '\u9001\u4FE1\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u518D\u5EA6\u9001\u4FE1\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u3044\u305F\u3060\u304F\u304B\u3001\u30EA\u30ED\u30FC\u30C9\u3057\u3066\u518D\u5EA6\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002'
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
                    _this3._onCancel(e);
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
                    _this3._onSend(e);
                  }
                },
                'SEND'
              )
            )
          );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'dialog-container' },
        _react2.default.createElement(
          'div',
          { className: 'dialog-base' },
          this._createDialog(this.props.state.contacts.contactState)
        )
      );
    }
  }]);

  return ConfirmDialog;
}(_react.Component);

var selector = function selector(state) {
  return { state: state };
};

exports.default = (0, _reactRedux.connect)(selector)(ConfirmDialog);