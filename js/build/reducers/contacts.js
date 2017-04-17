'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var initialState = [{
  id: 0,
  contactState: 'none',
  contactName: 'initialName',
  contactMailAddr: null,
  contactMessage: null
}];

var contacts = function contacts() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  //  console.log('reducers.contacts_before_switch.action: ' + action.type + ', ' + action.id + ', ' + action.contactName);  

  switch (action.type) {
    case 'CONFIRM':
      //      console.log('reducers.contacts.confirm.action: ' + action.type + ', ' + action.id + ', ' + action.contactName);
      return {
        id: action.id,
        contactState: 'confirm',
        contactName: action.contactName,
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage
      };

    case 'CLEAR':
      //      console.log('reducers.contacts.clear.action: ' + action.type + ', ' + action.id + ', ' + action.contactName);
      return {
        id: action.id,
        contactState: 'none',
        contactName: null,
        contactMailAddr: null,
        contactMessage: null
      };

    case 'CANCEL':
      return {
        id: action.id,
        contactState: 'none',
        contactName: null,
        contactMailAddr: null,
        contactMessage: null
      };

    case 'SEND':
      return {
        id: action.id,
        contactState: 'send',
        contactName: action.contactName,
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage
      };

    case 'COMPLETE':
      console.log('complete');
      return {
        id: action.id,
        contactState: 'complete',
        contactName: null,
        contactMailAddr: null,
        contactMessage: null
      };

    case 'ERROR':
      console.log('error');
      return {
        id: action.id,
        contactState: 'error',
        contactName: action.contactName,
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage
      };

    default:
      //      console.log('reducers.contacts.default.action: ' + action.type + ', ' + action.id + ', ' + action.contactName);
      return state;
  }
};

exports.default = contacts;