import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SEARCH, POPULAR, TOP_RATE, GENRE } from "../../actions";
import "../../styles/home/dist/home.css";
import Search from "../Search";

const TheMovieDB = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery.searchQuery);
  const [searchChange, setSearchChange] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const KEY_API = "abab3b40d24297977ea9e33e1c68dc93";
    const baseUrl = "https://api.themoviedb.org/3/";
    const searchMovieURL = `search/movie?api_key=${KEY_API}&language=en-US&page=1`;
    const getPopularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY_API}&language=en-US&page=1`;
    // const getVideos = "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US";
    const getTopRatedURL = `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY_API}&language=en-US&page=1`;

    const getGenreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY_API}&language=en-US`;
    const searchById = async () => {
      const getPopular = await axios.get(getPopularURL, {});
      const getTopRated = await axios.get(getTopRatedURL, {});
      const getGenre = await axios.get(getGenreURL, {});
      dispatch(GENRE(getGenre.data.genres));
      dispatch(TOP_RATE(getTopRated.data.results));
      dispatch(POPULAR(getPopular.data.results));
      if (!search) return;
      try {
        const searchResponse = await axios.get(baseUrl + searchMovieURL, {
          params: { query: search },
        });

        dispatch(SEARCH(searchResponse.data.results));
      } catch (err) {
        console.log(err);
      }
    };
    searchById();
  }, [dispatch, searchQuery, search]);

  const searchBar = (event) => {
    setSearchChange(event.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(searchChange);
  };

  return (
    <React.Fragment>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          onChange={searchBar}
          value={searchChange}
          placeholder="Search movies..."
        />
        <input type="submit" />
      </form>
      <Search />
    </React.Fragment>
  );
};

export default TheMovieDB;
