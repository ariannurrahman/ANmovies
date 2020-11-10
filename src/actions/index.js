import {
  SEARCH_QUERY,
  GET_POPULAR,
  PLAY_MOVIE,
  GET_TOP_RATED,
  GET_GENRES,
} from "./types";

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
export const TOP_RATE = (data) => {
  return {
    type: GET_TOP_RATED,
    payload: data,
  };
};

export const PLAY = (id) => {
  return {
    type: PLAY_MOVIE,
    payload: id,
  };
};
export const GENRE = (id) => {
  return {
    type: GET_GENRES,
    payload: id,
  };
};
