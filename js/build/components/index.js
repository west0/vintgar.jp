'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _contacts = require('./contacts');

var _contacts2 = _interopRequireDefault(_contacts);

var _some = require('./some');

var _some2 = _interopRequireDefault(_some);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vintgarApp = (0, _redux.combineReducers)({
  contacts: _contacts2.default,
  some: _some2.default
});

exports.default = vintgarApp;