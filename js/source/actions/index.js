let actionId = 1;

export const confirmContact = (contactMailAddr, contactMessage) => ({
  type: 'CONFIRM',
  id: actionId++,
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

export const sendMail = (contactMailAddr, contactMessage) => ({
  type: 'SEND',
  id: actionId++,
  contactMailAddr: contactMailAddr,
  contactMessage: contactMessage,
});

export const dispError = (contactMailAddr, contactMessage) => ({
  type: 'ERROR',
  id: actionId++,
  contactMailAddr: contactMailAddr,
  contactMessage: contactMessage,
})

export const completeInquiry = (contactMailAddr, contactMessage) => ({
  type: 'COMPLETE',
  id: actionId++,
  contactMailAddr: contactMailAddr,
  contactMessage: contactMessage,
})

export const finishInquiry = () => ({
  type: 'FINISH',
  id: actionId++,
  contactMailAddr: null,
  contactMessage: null,
})


