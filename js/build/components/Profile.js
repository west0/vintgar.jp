"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this, props));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "profile", className: "page-component" },
        _react2.default.createElement(
          "h3",
          { className: "page-title" },
          "profile"
        ),
        _react2.default.createElement(
          "dl",
          { id: "biography-list" },
          _react2.default.createElement(
            "dt",
            { className: "item-title" },
            "name"
          ),
          _react2.default.createElement(
            "dd",
            { className: "item-value" },
            "\u897F\u6751 \u30E8\u30B7\u30ED\u30A6"
          ),
          _react2.default.createElement(
            "dt",
            { className: "item-title" },
            "sex"
          ),
          _react2.default.createElement(
            "dd",
            { className: "item-value" },
            "\u7537\u6027"
          ),
          _react2.default.createElement(
            "dt",
            { className: "item-title" },
            "age"
          ),
          _react2.default.createElement(
            "dd",
            { className: "item-value" },
            "30\u4EE3"
          ),
          _react2.default.createElement(
            "dt",
            { className: "item-title" },
            "place"
          ),
          _react2.default.createElement(
            "dd",
            { className: "item-value" },
            "\u6771\u4EAC\u8FD1\u90CA",
            _react2.default.createElement(
              "small",
              { className: "biography-note" },
              "\u203B\u9060\u65B9\u306F\u5FDC\u76F8\u8AC7"
            )
          )
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;