'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Profile = require('./components/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _ContactForm = require('./components/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(_Home2.default, null),
  _react2.default.createElement(_Profile2.default, null),
  _react2.default.createElement(_ContactForm2.default, null),
  _react2.default.createElement(
    'p',
    null,
    'scripts by app.js'
  )
), document.getElementById('app'));

/* */