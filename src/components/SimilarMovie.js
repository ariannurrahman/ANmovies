import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../styles/similar/dist/similar.css";
import star from "../images/icon/star.svg";
const SimilarMovie = () => {
  const movie_id = useSelector((state) => state.getId.movie_id);
  const baseURL = "https://api.themoviedb.org/3/movie/";
  const apiKey = "abab3b40d24297977ea9e33e1c68dc93";
  const [similarData, setSimilarData] = useState(null);
  const similarMovieURL = `/similar?api_key=${apiKey}&language=en-US&page=1`;
  useEffect(() => {
    if (!movie_id) return;

    const similarMovie = async () => {
      const response = await Axios.get(
        baseURL + movie_id + similarMovieURL,
        {}
      );
      setSimilarData(response.data.results);
    };

    similarMovie();
  }, [similarMovieURL, movie_id]);
  const renderSimilar = () => {
    if (!similarData) return;

    const topPopularity = similarData.sort(
      (a, b) => b.vote_average - a.vote_average
    );

    return topPopularity.map((item, index) => {
      if (index <= 6) {
        return (
          <div className="similar-card" key={index}>
            <div className="similar-card-top">
              <div className="similar-card-title">{item.title}</div>
            </div>
            <div className="similar-card-middle">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="card on similar section"
              />
            </div>
            <div className="similar-card-bottom">
              <div className="similar-card-bottom_top">
                <div className="rating">{item.vote_average}</div>
                <img src={star} alt="rating star" />
              </div>
              <input type="button" value="Go to movie.." />
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="similar-container">
      <div className="similar-title">Similar Movie</div>
      <div className="similar-card-container">{renderSimilar()}</div>
    </div>
  );
};

export default SimilarMovie;
