import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import PopularReducer from "./PopularReducer";
import PlayReducer from "./PlayReducer";
export default combineReducers({
  searchQuery: SearchReducer,
  getPopular: PopularReducer,
  getId: PlayReducer,
});
