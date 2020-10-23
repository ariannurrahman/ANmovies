import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "../../styles/home/dist/home.css";

const TheMovieDB = ({ searchQuery }) => {
  const [dataFromApi, setDataFromApi] = useState(null);

  const genreList = useCallback((data) => {
    setDataFromApi(data);
  }, []);

  useEffect(() => {
    const KEY_API = "abab3b40d24297977ea9e33e1c68dc93";
    const baseUrl = "https://api.themoviedb.org/3/";
    const searchMovieURL = `search/movie?api_key=${KEY_API}&language=en-US&page=1&include_adult=false`;
    const searchById = async () => {
      if (!searchQuery) return;
      try {
        const searchResponse = await axios.get(baseUrl + searchMovieURL, {
          params: { query: searchQuery },
        });

        genreList(searchResponse.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    searchById();
  }, [genreList, searchQuery]);

  const renderPoster = () => {
    if (!dataFromApi) return;
    return dataFromApi.map((item, index) => (
      <img
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt=""
        key={index}
      />
    ));
  };

  return (
    <div className="tmdb-container">
      <div className="tmdb-wrapper">{renderPoster()}</div>
    </div>
  );
};

export default TheMovieDB;
