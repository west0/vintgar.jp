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


// input action
export const updateMailAddrState = (mailAddrState) => {
  switch (mailAddrState) {
    case 'null-error':
      return {type: 'MAILADDR_NULL_ERROR'}
      
    case 'mb-error':
      return {type: 'MAILADDR_MB_ERROR'}

    case 'complete':
      return {type: 'MAILADDR_COMPLETE'}
      
    default:
      return null;
  }
}

export const updateMessageState = (messageState) => {
  switch (messageState) {
    case 'null-error':
      return {type: 'MESSAGE_NULL_ERROR'}

    case 'complete':
      return {type: 'MESSAGE_COMPLETE'}
      
    default:
      return null;
  }
}

export const clearInputState = () => {
  return {type: 'CLEAR_STATE'}
}

