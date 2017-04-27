'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = require('redux');

var _contacts = require('./contacts');

var _contacts2 = _interopRequireDefault(_contacts);

var _inputs = require('./inputs');

var _inputs2 = _interopRequireDefault(_inputs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = exports.reducers = (0, _redux.combineReducers)({
  contacts: _contacts2.default,
  inputs: _inputs2.default
});

exports.default = reducers;