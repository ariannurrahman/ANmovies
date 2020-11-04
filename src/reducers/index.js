import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import PopularReducer from "./PopularReducer";
export default combineReducers({
  searchQuery: SearchReducer,
  getPopular: PopularReducer,
});
