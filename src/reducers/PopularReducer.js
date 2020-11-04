import { GET_POPULAR } from "../actions/types";

const INITIAL_STATE = {
  popular: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POPULAR:
      return { ...state, popular: action.payload };
    default:
      return state;
  }
};
