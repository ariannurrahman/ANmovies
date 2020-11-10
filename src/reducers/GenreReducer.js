import { GET_GENRES } from "../actions/types";

const INITIAL_STATE = {
  genre_id: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GENRES:
      return { ...state, genre_id: action.payload };
    default:
      return state;
  }
};
