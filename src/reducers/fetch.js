import { FETCH_START, FETCH_COMPLETE, FETCH_PENDING } from '../actions/types';

export const fetchReducer =
  (initialState) =>
  (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return state;
      case FETCH_PENDING:
        return { ...state, loading: true };
      case FETCH_COMPLETE:
        return { ...state, ...action.payload, loading: false };
      default:
        return state;
    }
  };

export const fetchMovieDetailsReducer =
  (initialState) =>
  (state = initialState, action) => {
    switch (action.type) {
      case FETCH_START:
        return state;
      case FETCH_PENDING:
        return { ...state, loading: true };
      case FETCH_COMPLETE:
        return { ...action.payload, loading: false };
      default:
        return state;
    }
  };
