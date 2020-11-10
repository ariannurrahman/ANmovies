import { combineReducers } from "redux";
import SearchReducer from "./SearchReducer";
import PopularReducer from "./PopularReducer";
import PlayReducer from "./PlayReducer";
import TopRateReducer from "./TopRateReducer";
import GenreReducer from "./GenreReducer";
export default combineReducers({
  searchQuery: SearchReducer,
  getPopular: PopularReducer,
  getId: PlayReducer,
  getTopRated: TopRateReducer,
  getGenre: GenreReducer,
});
