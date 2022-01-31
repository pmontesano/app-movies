import { FETCH_START, FETCH_COMPLETE, FETCH_PENDING } from '../actions/types';

const initialState = {
  results: [],
  loading: false,
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, ...action.payload, loading: false };
    case FETCH_PENDING:
      return { ...state, loading: true };
    case FETCH_COMPLETE:
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};

export const fetchMovieDetailsReducer = (state = initialState, action) => {
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
