'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormInput = function (_Component) {
  _inherits(FormInput, _Component);

  function FormInput() {
    _classCallCheck(this, FormInput);

    return _possibleConstructorReturn(this, (FormInput.__proto__ || Object.getPrototypeOf(FormInput)).apply(this, arguments));
  }

  _createClass(FormInput, [{
    key: 'getValue',
    value: function getValue() {
      return 'value' in this.refs.input ? this.refs.input.value : this.refs.input.getValue();
    }
  }, {
    key: 'render',
    value: function render() {
      var common = {
        id: this.props.id,
        ref: 'input',
        defaultValue: this.props.defaultValue,
        formId: this.props.formId
      };
      switch (this.props.type) {
        case 'name':
          return _react2.default.createElement('input', _extends({}, common, { id: common.formId, type: 'text' }));

        case 'mail':
          return _react2.default.createElement('input', _extends({}, common, { id: common.formId, type: 'email', autoComplete: 'on' }));

        case 'message':
          return _react2.default.createElement('textarea', _extends({}, common, { id: common.formId }));

        default:
          return _react2.default.createElement('input', _extends({}, common, { type: 'text' }));
      }
    }
  }]);

  return FormInput;
}(_react.Component);

FormInput.defaultProps = {
  type: 'input'
};
exports.default = FormInput;