import { combineReducers } from 'redux';

import devReducer from './Dev';
import displayReducer from './Display';
import characterReducer from './CharacterReducer';

const reducers = {
  devReducer,
  displayReducer,
  characterReducer,
};

const reducer = combineReducers(reducers);

export default reducer;