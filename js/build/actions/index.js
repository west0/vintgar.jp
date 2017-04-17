'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionId = 1;

var confirmContact = exports.confirmContact = function confirmContact(contactName, contactMailAddr, contactMessage) {
  return {
    type: 'CONFIRM',
    id: actionId++,
    contactName: contactName,
    contactMailAddr: contactMailAddr,
    contactMessage: contactMessage
  };
};

var clearForm = exports.clearForm = function clearForm() {
  return {
    type: 'CLEAR',
    id: actionId++
  };
};

var cancelDialog = exports.cancelDialog = function cancelDialog() {
  return {
    type: 'CANCEL',
    id: actionId++
  };
};

var sendMail = exports.sendMail = function sendMail(contactName, contactMailAddr, contactMessage) {
  return {
    type: 'ERROR',
    id: actionId++,
    contactName: contactName,
    contactMailAddr: contactMailAddr,
    contactMessage: contactMessage
  };
};