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

var Services = function (_Component) {
  _inherits(Services, _Component);

  function Services(props) {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).call(this, props));
  }

  _createClass(Services, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "services", className: "page-component profile-section" },
        _react2.default.createElement(
          "h3",
          null,
          "service"
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("img", { id: "service-img", src: "images/service.png", alt: "project management, dev-direction, business-consulting" })
        ),
        _react2.default.createElement(
          "p",
          null,
          "\u30D5\u30EA\u30FC\u30E9\u30F3\u30B9\u3067\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u63A8\u9032\u3092\u304A\u624B\u4F1D\u3044\u3057\u3066\u3044\u307E\u3059\u3002",
          _react2.default.createElement("br", null),
          "\u7686\u69D8\u306E\u8AB2\u984C\u306B\u5408\u308F\u305B\u3066\u3001\u4E3B\u306B\u4EE5\u4E0B\u306E\u8981\u7D20\u3092\u67D4\u8EDF\u306B\u7D44\u307F\u5408\u308F\u305B\u3066\u304A\u624B\u4F1D\u3044\u3044\u305F\u3057\u307E\u3059\u3002\u307E\u305A\u306F\u304A\u6C17\u8EFD\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"
        ),
        _react2.default.createElement(
          "dl",
          { id: "service-list" },
          _react2.default.createElement(
            "dt",
            null,
            "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8"
          ),
          _react2.default.createElement(
            "dd",
            null,
            _react2.default.createElement(
              "p",
              { className: "detail" },
              "PMBOK\u6E96\u62E0, \u5404\u793E\u30EB\u30FC\u30EB\u6E96\u62E0, \u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u30D7\u30ED\u30BB\u30B9\u6539\u5584 etc."
            ),
            _react2.default.createElement(
              "p",
              { id: "service-note" },
              "* [Certification] PMP(PMI), ProjectManager(IPA.Japan)"
            )
          ),
          _react2.default.createElement(
            "dt",
            null,
            "\u958B\u767A\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3"
          ),
          _react2.default.createElement(
            "dd",
            null,
            _react2.default.createElement(
              "p",
              { className: "detail" },
              "\u9867\u5BA2\u63D0\u6848/\u5BFE\u5FDC, \u8981\u4EF6\u5B9A\u7FA9, \u958B\u767A\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3/\u8AB2\u984C\u7BA1\u7406, \u30C6\u30B9\u30C8 etc."
            ),
            _react2.default.createElement(
              "p",
              { id: "service-note" },
              "* [\u5BFE\u8C61]Web\u30B5\u30A4\u30C8, Smartphone\u30A2\u30D7\u30EA, \u305D\u306E\u4ED6\u30B7\u30B9\u30C6\u30E0"
            )
          ),
          _react2.default.createElement(
            "dt",
            null,
            "\u30D3\u30B8\u30CD\u30B9\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0"
          ),
          _react2.default.createElement(
            "dd",
            null,
            _react2.default.createElement(
              "p",
              { className: "detail" },
              "\u696D\u52D9\u30D5\u30ED\u30FC\u69CB\u7BC9/\u6539\u5584, \u8CC7\u6599\u4F5C\u6210, \u554F\u984C\u6574\u7406/\u5206\u6790, \u89E3\u6C7A\u7B56\u63D0\u6848/\u5B9F\u884C etc."
            )
          ),
          _react2.default.createElement(
            "dt",
            { className: "programming" },
            "\u30A8\u30F3\u30B8\u30CB\u30A2\u696D\u52D9"
          ),
          _react2.default.createElement(
            "dd",
            null,
            _react2.default.createElement(
              "p",
              { className: "detail" },
              "\u6280\u8853\u5B9F\u52D9\u306E\u63D0\u4F9B\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F\u3002"
            )
          )
        )
      );
    }
  }]);

  return Services;
}(_react.Component);

exports.default = Services;