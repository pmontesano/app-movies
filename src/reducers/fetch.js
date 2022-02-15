import {
  FETCH_START,
  FETCH_COMPLETE,
  FETCH_PENDING,
  FETCH_DETAILS_START,
  FETCH_DETAILS_COMPLETE,
  FETCH_DETAILS_PENDING,
  FETCH_DETAILS_ERROR,
} from '../actions/types';

const initialState = {
  results: [],
  loading: false,
};

export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case FETCH_PENDING:
      return { ...state, loading: true };
    case FETCH_COMPLETE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const fetchMovieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_START:
      return {
        ...state,
      };
    case FETCH_DETAILS_PENDING:
      return { ...state, loading: true };
    case FETCH_DETAILS_COMPLETE:
      return { ...state, ...action.payload, loading: false };
    case FETCH_DETAILS_ERROR:
      return { ...state, ...action.error, loading: false };
    default:
      return state;
  }
};
