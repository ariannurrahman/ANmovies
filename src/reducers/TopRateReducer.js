import { GET_TOP_RATED } from "../actions/types";

const INITIAL_STATE = {
  top_rate: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOP_RATED:
      return { ...state, top_rate: action.payload };
    default:
      return state;
  }
};
