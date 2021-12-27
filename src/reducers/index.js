import { combineReducers } from 'redux';
import { fetchReducer } from './fetch';

const reducer = (state) =>
  combineReducers({
    fetchData: fetchReducer(state),
  });

export default reducer;
