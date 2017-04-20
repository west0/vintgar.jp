
let initialState = [
  {
    id: 0,
    contactState: 'none',
    contactMailAddr: null,
    contactMessage: null,
    isSendError: false,
  },
];

let contacts = (state = initialState, action) => {
//  console.log('reducers.contacts_before_switch.action: ' + action.type + ', ' + action.id);  

  switch (action.type) {
    case 'CONFIRM':
//      console.log('reducers.contacts.confirm.action: ' + action.type + ', ' + action.id);
      return {
        id: action.id,
        contactState: 'confirm',
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage,
        isSendError: false,
      }
    
    case 'CLEAR':
    case 'FINISH':
//      console.log('reducers.contacts.clear.action: ' + action.type + ', ' + action.id + ', ' + action.contactMailAddr);
      return {
        id: action.id,
        contactState: 'none',
        contactMailAddr: null,
        contactMessage: null,
        isSendError: false,
      }

    case 'CANCEL':
      return {
        id: action.id,
        contactState: 'none',
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage,
        isSendError: false,
      };

    case 'SEND':
      return {
        id: action.id,
        contactState: 'sending',
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage,
        isSendError: false,
      };
      
    case 'COMPLETE':
      console.log('complete');
      return {
        id: action.id,
        contactState: 'complete',
        contactMailAddr: null,
        contactMessage: null,
        isSendError: false,
      };

    case 'ERROR':
      console.log('reducers.contacts.contactState: error');
      return {
        id: action.id,
        contactState: 'confirm',
        contactMailAddr: action.contactMailAddr,
        contactMessage: action.contactMessage,
        isSendError: true,
      };



    default:
//      console.log('reducers.contacts.default.action: ' + action.type + ', ' + action.id);
      return state;
  }
};

export default contacts

