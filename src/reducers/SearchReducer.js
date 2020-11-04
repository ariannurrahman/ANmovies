import { SEARCH_QUERY } from "../actions/types";

const INITIAL_STATE = {
  query: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};
