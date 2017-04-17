export const confirmContact = (name, mailAddr, message) => ({
  type: 'CONFIRM',
  name: name,
  mailAddr: mailAddr,
  message: message,
});

export const clearForm = () => ({
  type: 'CLEAR',
});

export const cancelDialog = () => ({
  type: 'CANCEL',
});

export const sendMail = (name, mailAddr, message) => ({
  type: 'CONFIRM',
  name: name,
  mailAddr: mailAddr,
  message: message,
});

