import { PLAY_MOVIE } from "../actions/types";

const INITIAL_STATE = {
  movie_id: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAY_MOVIE:
      return { ...state, movie_id: action.payload };
    default:
      return state;
  }
};
