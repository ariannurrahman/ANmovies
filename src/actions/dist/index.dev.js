"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLAY = exports.POPULAR = exports.SEARCH = void 0;

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

var PLAY = function PLAY(id) {
  return {
    type: _types.PLAY_MOVIE,
    payload: id
  };
};

exports.PLAY = PLAY;