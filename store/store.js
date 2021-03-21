import {createStore} from 'redux';
import {combineReducers} from 'redux';
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  store: reducer
});

const store = createStore(rootReducer);

export default store;