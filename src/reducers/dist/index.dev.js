"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _SearchReducer = _interopRequireDefault(require("./SearchReducer"));

var _PopularReducer = _interopRequireDefault(require("./PopularReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  searchQuery: _SearchReducer["default"],
  getPopular: _PopularReducer["default"]
});

exports["default"] = _default;