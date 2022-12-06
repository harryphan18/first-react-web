import { combineReducers } from 'redux'
import todos from './todos';
import { reducer as forms } from 'redux-form';

export default combineReducers({
  todos,
  form: forms,
})