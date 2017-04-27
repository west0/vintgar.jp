'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = [{
  id: 0,
  contactState: 'none',
  contactMailAddr: null,
  contactMessage: null,
  isSendError: false
}];

var contacts = function contacts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'CONFIRM':
      return {
        id: action.id,
        contactState: 'confirm',
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage,
        isSendError: false
      };

    case 'CLEAR':
    case 'FINISH':
      return {
        id: action.id,
        contactState: 'none',
        contactMailAddr: null,
        contactMessage: null,
        isSendError: false
      };

    case 'CANCEL':
      return {
        id: action.id,
        contactState: 'none',
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage,
        isSendError: false
      };

    case 'SEND':
      return {
        id: action.id,
        contactState: 'sending',
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage,
        isSendError: false
      };

    case 'COMPLETE':
      return {
        id: action.id,
        contactState: 'complete',
        contactMailAddr: null,
        contactMessage: null,
        isSendError: false
      };

    case 'ERROR':
      return {
        id: action.id,
        contactState: 'confirm',
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage,
        isSendError: true
      };

    default:
      return state;
  }
};

exports.default = contacts;