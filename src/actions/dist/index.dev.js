"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GENRE = exports.PLAY = exports.TOP_RATE = exports.POPULAR = exports.SEARCH = void 0;

var _types = require("./types");

var SEARCH = function SEARCH(query) {
  return {
    type: _types.SEARCH_QUERY,
    payload: query
  };
};

exports.SEARCH = SEARCH;

var POPULAR = function POPULAR(data) {
  return {
    type: _types.GET_POPULAR,
    payload: data
  };
};

exports.POPULAR = POPULAR;

var TOP_RATE = function TOP_RATE(data) {
  return {
    type: _types.GET_TOP_RATED,
    payload: data
  };
};

exports.TOP_RATE = TOP_RATE;

var PLAY = function PLAY(id) {
  return {
    type: _types.PLAY_MOVIE,
    payload: id
  };
};

exports.PLAY = PLAY;

var GENRE = function GENRE(id) {
  return {
    type: _types.GET_GENRES,
    payload: id
  };
};

exports.GENRE = GENRE;