import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";

const MoviePlayer = () => {
  const [key, setKey] = useState("");
  const getVideosURL =
    "/videos?api_key=abab3b40d24297977ea9e33e1c68dc93&language=en-US";
  const baseURL = "https://api.themoviedb.org/3/movie/";

  const movie_id = useSelector((state) => state.getId.movie_id);

  useEffect(() => {
    if (!movie_id) return;
    const movieById = async () => {
      const response = await axios.get(baseURL + movie_id + getVideosURL);

      setKey(`https://www.youtube.com/watch?v=${response.data.results[0].key}`);
    };

    movieById();
  }, [key, setKey, movie_id]);

  console.log(key);

  return <ReactPlayer url={key} />;
};

export default MoviePlayer;
