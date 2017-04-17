import { combineReducers } from 'redux';
import contacts from './contacts';
import some from './some';


export const vintgarApp = combineReducers({
  contacts,
  some,
});

export default vintgarApp
