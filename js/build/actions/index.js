'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var actionId = 1;

var confirmContact = exports.confirmContact = function confirmContact(contactMailAddr, contactMessage) {
  return {
    type: 'CONFIRM',
    id: actionId++,
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

var sendMail = exports.sendMail = function sendMail(contactMailAddr, contactMessage) {
  return {
    type: 'SEND',
    id: actionId++,
    contactMailAddr: contactMailAddr,
    contactMessage: contactMessage
  };
};

var dispError = exports.dispError = function dispError(contactMailAddr, contactMessage) {
  return {
    type: 'ERROR',
    id: actionId++,
    contactMailAddr: contactMailAddr,
    contactMessage: contactMessage
  };
};

var completeInquiry = exports.completeInquiry = function completeInquiry(contactMailAddr, contactMessage) {
  return {
    type: 'COMPLETE',
    id: actionId++,
    contactMailAddr: contactMailAddr,
    contactMessage: contactMessage
  };
};

var finishInquiry = exports.finishInquiry = function finishInquiry() {
  return {
    type: 'FINISH',
    id: actionId++,
    contactMailAddr: null,
    contactMessage: null
  };
};