import { combineReducers } from 'redux';
import contacts from './contacts';
import inputs from './inputs';


export const reducers = combineReducers({
  contacts: contacts,
  inputs: inputs,
});

export default reducers
