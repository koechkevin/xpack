import { combineReducers } from 'redux';
import { TYPE } from '../constants';

const initialState = {};
export const reducer = (state = initialState, action) => {
  if (action.type === TYPE) return state;
  return state;
};
export default combineReducers({
  reducer,
});
