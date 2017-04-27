'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = [{
  inputState: false,
  isMailAddrNullError: true,
  isMailAddrMbError: false,
  isMessageNullError: true
}];

var contacts = function contacts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'MAILADDR_NULL_ERROR':
      return {
        inputState: true,
        isMailAddrNullError: true,
        isMailAddrMbError: state.isMailAddrMbError,
        isMessageNullError: state.isMessageNullError === undefined ? true : state.isMessageNullError
      };

    case 'MAILADDR_MB_ERROR':
      return {
        inputState: true,
        isMailAddrNullError: state.isMailAddrNullError,
        isMailAddrMbError: true,
        isMessageNullError: state.isMessageNullError
      };
    case 'MAILADDR_COMPLETE':
      return {
        inputState: true,
        isMailAddrNullError: false,
        isMailAddrMbError: false,
        isMessageNullError: state.isMessageNullError
      };

    case 'MESSAGE_NULL_ERROR':
      return {
        inputState: true,
        isMailAddrNullError: state.isMailAddrNullError === undefined ? true : state.isMailAddrNullError,
        isMailAddrMbError: state.isMailAddrMbError,
        isMessageNullError: true
      };

    case 'MESSAGE_COMPLETE':
      return {
        inputState: true,
        isMailAddrNullError: state.isMailAddrNullError,
        isMailAddrMbError: state.isMailAddrMbError,
        isMessageNullError: false
      };

    case 'CLEAR_STATE':
      return initialState;

    default:
      return state;
  }
};

exports.default = contacts;