let actionId = 1;

export const confirmContact = (contactName, contactMailAddr, contactMessage) => ({
  type: 'CONFIRM',
  id: actionId++,
  contactName: contactName,
  contactMailAddr: contactMailAddr,
  contactMessage: contactMessage,
});

export const clearForm = () => ({
  type: 'CLEAR',
  id: actionId++,
});

export const cancelDialog = () => ({
  type: 'CANCEL',
  id: actionId++,
});

export const sendMail = (contactName, contactMailAddr, contactMessage) => ({
  type: 'ERROR',
  id: actionId++,
  contactName: contactName,
  contactMailAddr: contactMailAddr,
  contactMessage: contactMessage,
});

