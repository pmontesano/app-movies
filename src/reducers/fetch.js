import { FETCH_START, FETCH_COMPLETE } from '../actions/types';

export const fetchReducer =
  (initialState) =>
  (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return state;
      case FETCH_COMPLETE:
        return action.payload;
      default:
        return state;
    }
  };
