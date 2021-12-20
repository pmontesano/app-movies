import { FETCH_START } from "../actions/types";

export const reducer =
  (initialState) =>
  (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_START":
        return state;
      case "PEPE":
        return {
          ...state,
          pepe: "pepe",
        };
      default:
        return state;
    }
  };
