'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducers = undefined;

var _redux = require('redux');

var _contacts = require('./contacts');

var _contacts2 = _interopRequireDefault(_contacts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import some from './some';


var reducers = exports.reducers = (0, _redux.combineReducers)({
  contacts: _contacts2.default
});

exports.default = reducers;