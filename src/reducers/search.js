import {
  SEARCH_PENDING,
  SEARCH_COMPLETE,
  SEARCH_ERROR,
} from '../actions/types';

const initialState = {
  results: [],
  loading: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PENDING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_COMPLETE:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case SEARCH_ERROR:
      return {
        ...state,
        ...action.error,
        loading: false,
      };
    default:
      return state;
  }
};
