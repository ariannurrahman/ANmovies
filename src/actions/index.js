import { SEARCH_QUERY, GET_POPULAR, PLAY_MOVIE } from "./types";

export const SEARCH = (query) => {
  return {
    type: SEARCH_QUERY,
    payload: query,
  };
};

export const POPULAR = (data) => {
  return {
    type: GET_POPULAR,
    payload: data,
  };
};

export const PLAY = (id) => {
  return {
    type: PLAY_MOVIE,
    payload: id,
  };
};
