'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _GlobalNav = require('./components/GlobalNav');

var _GlobalNav2 = _interopRequireDefault(_GlobalNav);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Profile = require('./components/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

var _Services = require('./components/Services');

var _Services2 = _interopRequireDefault(_Services);

var _Skills = require('./components/Skills');

var _Skills2 = _interopRequireDefault(_Skills);

var _ContactForm = require('./components/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _reducers = require('./reducers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers.vintgarApp);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Home2.default, null),
    _react2.default.createElement(
      'div',
      { id: 'main-contents', className: 'root-component' },
      _react2.default.createElement(_Profile2.default, null),
      _react2.default.createElement(_Services2.default, null),
      _react2.default.createElement(_Skills2.default, null),
      _react2.default.createElement(_ContactForm2.default, null)
    ),
    _react2.default.createElement(_GlobalNav2.default, null)
  )
), document.getElementById('app'));

/* */