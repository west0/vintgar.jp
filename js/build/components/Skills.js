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

var Skills = function (_Component) {
  _inherits(Skills, _Component);

  function Skills(props) {
    _classCallCheck(this, Skills);

    return _possibleConstructorReturn(this, (Skills.__proto__ || Object.getPrototypeOf(Skills)).call(this, props));
  }

  _createClass(Skills, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "skills", className: "page-component profile-section" },
        _react2.default.createElement(
          "h3",
          { className: "page-title" },
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
      );
    }
  }]);

  return Skills;
}(_react.Component);

exports.default = Skills;