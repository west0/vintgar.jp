'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var confirmContact = exports.confirmContact = function confirmContact(name, mailAddr, message) {
  return {
    type: 'CONFIRM',
    name: name,
    mailAddr: mailAddr,
    message: message
  };
};

var clearForm = exports.clearForm = function clearForm() {
  return {
    type: 'CLEAR'
  };
};

var cancelDialog = exports.cancelDialog = function cancelDialog() {
  return {
    type: 'CANCEL'
  };
};

var sendMail = exports.sendMail = function sendMail(name, mailAddr, message) {
  return {
    type: 'CONFIRM',
    name: name,
    mailAddr: mailAddr,
    message: message
  };
};