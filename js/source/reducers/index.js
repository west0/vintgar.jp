import { combineReducers } from 'redux';
import contacts from './contacts';
//import some from './some';


export const reducers = combineReducers({
  contacts: contacts,
});

export default reducers
