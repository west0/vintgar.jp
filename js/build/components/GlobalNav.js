'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactScroll = require('react-scroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalNav = function (_Component) {
  _inherits(GlobalNav, _Component);

  function GlobalNav(props) {
    _classCallCheck(this, GlobalNav);

    return _possibleConstructorReturn(this, (GlobalNav.__proto__ || Object.getPrototypeOf(GlobalNav)).call(this, props));
  }

  _createClass(GlobalNav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { id: 'global-nav', className: 'page-component' },
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactScroll.Link,
              { className: 'global-link', to: 'home', spy: true, smooth: true, duration: 500 },
              'home'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactScroll.Link,
              { className: 'global-link', to: 'services', spy: true, smooth: true, duration: 500 },
              'services'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactScroll.Link,
              { className: 'global-link', to: 'skills', spy: true, smooth: true, duration: 500 },
              'skills'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactScroll.Link,
              { className: 'global-link', to: 'contact-form', spy: true, smooth: true, duration: 500 },
              'contact'
            )
          )
        )
      );
    }
  }]);

  return GlobalNav;
}(_react.Component);

exports.default = GlobalNav;