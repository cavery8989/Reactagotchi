import { combineReducers } from 'redux';
import devReducer from './Dev';

const reducers = {
  devReducer,
};

const reducer = combineReducers(reducers);

export default reducer;