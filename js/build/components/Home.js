'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _HomeMenu = require('./HomeMenu');

var _HomeMenu2 = _interopRequireDefault(_HomeMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'home', className: 'root-component' },
        _react2.default.createElement(
          'div',
          { id: 'home-contents' },
          _react2.default.createElement(
            'header',
            null,
            _react2.default.createElement(
              'h1',
              null,
              '\u305D\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3001\u304A\u624B\u4F1D\u3044\u3057\u307E\u3059\u3002'
            ),
            _react2.default.createElement(
              'h2',
              null,
              '\u897F\u6751\u30E8\u30B7\u30ED\u30A6: \u30D5\u30EA\u30FC\u30E9\u30F3\u30B9'
            ),
            _react2.default.createElement(
              'p',
              { id: 'lead' },
              '\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8, \u958B\u767A\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3, \u30D3\u30B8\u30CD\u30B9\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0, etc.'
            )
          ),
          _react2.default.createElement(_HomeMenu2.default, null)
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;