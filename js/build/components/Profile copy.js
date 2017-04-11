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
        "div",
        { id: "profile", className: "page-component" },
        _react2.default.createElement(
          "section",
          { id: "biography", className: "profile-section" },
          _react2.default.createElement(
            "h3",
            null,
            "profile"
          ),
          _react2.default.createElement(
            "dl",
            { id: "biography-list" },
            _react2.default.createElement(
              "dt",
              { className: "item-title" },
              "Name"
            ),
            _react2.default.createElement(
              "dd",
              { className: "item-value" },
              "Yoshiro Nishimura"
            ),
            _react2.default.createElement(
              "dt",
              { className: "item-title" },
              "Sex"
            ),
            _react2.default.createElement(
              "dd",
              { className: "item-value" },
              "Male"
            ),
            _react2.default.createElement(
              "dt",
              { className: "item-title" },
              "Age"
            ),
            _react2.default.createElement(
              "dd",
              { className: "item-value" },
              "30s"
            ),
            _react2.default.createElement(
              "dt",
              { className: "item-title" },
              "Live"
            ),
            _react2.default.createElement(
              "dd",
              { className: "item-value" },
              "Tokyo, Japan"
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "services", className: "profile-section" },
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
            "\u4E3B\u306B\u4EE5\u4E0B\u306E3\u8981\u7D20\u3092\u67D4\u8EDF\u306B\u7D44\u307F\u5408\u308F\u305B\u3066\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u306B\u53C2\u753B\u3057\u3066\u3044\u307E\u3059\u306E\u3067\u3001\u304A\u6C17\u8EFD\u306B\u3054\u76F8\u8AC7\u304F\u3060\u3055\u3044\u3002"
          ),
          _react2.default.createElement(
            "dl",
            { id: "service-list" },
            _react2.default.createElement(
              "dt",
              null,
              "Project Management"
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
                { id: "pm-note" },
                "* [Certification] PMP(PMI), ProjectManager(IPA.Japan)"
              )
            ),
            _react2.default.createElement(
              "dt",
              null,
              "Dev-Direction"
            ),
            _react2.default.createElement(
              "dd",
              null,
              _react2.default.createElement(
                "p",
                { className: "detail" },
                "\u9867\u5BA2\u63D0\u6848, \u8981\u4EF6\u5B9A\u7FA9, \u9867\u5BA2\u5BFE\u5FDC, \u958B\u767A\u30C7\u30A3\u30EC\u30AF\u30B7\u30E7\u30F3, \u8AB2\u984C\u7BA1\u7406, \u30C6\u30B9\u30C8, \u7D0D\u54C1 etc."
              )
            ),
            _react2.default.createElement(
              "dt",
              null,
              "Business Consulting"
            ),
            _react2.default.createElement(
              "dd",
              null,
              _react2.default.createElement(
                "p",
                { className: "detail" },
                "\u696D\u52D9\u30D5\u30ED\u30FC\u69CB\u7BC9/\u6539\u5584, \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u4F5C\u6210, \u554F\u984C\u6574\u7406/\u5206\u6790, \u89E3\u6C7A\u7B56\u7B56\u5B9A/\u63D0\u6848 etc."
              )
            ),
            _react2.default.createElement(
              "dt",
              { className: "programming" },
              "Programming"
            ),
            _react2.default.createElement(
              "dd",
              null,
              _react2.default.createElement(
                "p",
                { className: "detail" },
                "out of service."
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "skills", className: "profile-section" },
          _react2.default.createElement(
            "h3",
            null,
            "skills"
          ),
          _react2.default.createElement(
            "ul",
            { id: "skill-info" },
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "ul",
                { className: "skill-group" },
                _react2.default.createElement(
                  "li",
                  { className: "skill-title pm-skill" },
                  "PMP(ProjectManagementProfessional)[PMI]"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title pm-skill" },
                  "ProjectManager[IPA.Japan]"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title pm-skill" },
                  "PMBOK Standards"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-etc" },
                  "..."
                )
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "ul",
                { className: "skill-group" },
                _react2.default.createElement(
                  "li",
                  { className: "skill-title doc-skill" },
                  "PowerPoint"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title doc-skill" },
                  "Excel+VBA"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title doc-skill" },
                  "Access"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title doc-skill" },
                  "Word"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-etc" },
                  "..."
                )
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "ul",
                { className: "skill-group" },
                _react2.default.createElement(
                  "li",
                  { className: "skill-title tech-skill" },
                  "Python"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title tech-skill" },
                  "PHP"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title tech-skill" },
                  "JavaScript(+React+Redux/flux,etc.)"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title tech-skill" },
                  "HTML5"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title tech-skill" },
                  "CSS3"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title tech-skill" },
                  "Linux"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title tech-skill" },
                  "MySQL/MariaDB"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-etc" },
                  "..."
                )
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "ul",
                { className: "skill-group" },
                _react2.default.createElement(
                  "li",
                  { className: "skill-title web-skill" },
                  "Photoshop"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-title web-skill" },
                  "Illustrator"
                ),
                _react2.default.createElement(
                  "li",
                  { className: "skill-etc" },
                  "..."
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Profile;
}(_react.Component);

exports.default = Profile;