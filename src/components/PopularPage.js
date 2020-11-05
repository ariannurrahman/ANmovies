import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "../styles/popular/dist/popularpage.css";
import MoviePlayer from "./MoviePlayer";
import star from "../images/icon/star.svg";
const PopularPage = () => {
  const history = useHistory();
  const [dataEachPopularPage, setDataEachPopularPage] = useState({
    img: null,
    title: "",
    poster: null,
    rating: null,
  });
  const { slug } = useParams();
  const popularData = useSelector((state) => state.getPopular.popular);
  console.log([slug, popularData]);

  useEffect(() => {
    if (!popularData) {
      return history.push("/");
    } else {
      const popularEachPage = popularData.find((each) => {
        return each.id + "" === slug;
      });
      setDataEachPopularPage({
        img: popularEachPage.poster_path,
        title: popularEachPage.original_title,
        overview: popularEachPage.overview,
        rating: popularEachPage.vote_average,
      });
    }
  }, [setDataEachPopularPage, slug, popularData, history]);

  console.log("dataeach", dataEachPopularPage);
  return (
    <div className="pp-container">
      <div className="pp-wrapper">
        <div className="pp-top">
          <div className="pp-title">{dataEachPopularPage.title}</div>
          <div className="pp-top_bottom">
            <MoviePlayer className="movie-player" />
          </div>
        </div>
        <div className="pp-bottom">
          <img
            src={`https://image.tmdb.org/t/p/w500${dataEachPopularPage.img}`}
            alt=""
          />
          <div className="pp-bottom_right">
            <div className="pp-overview">{dataEachPopularPage.overview}</div>
            <div className="pp-rating-container">
              <div className="pp-rating">{dataEachPopularPage.rating}</div>
              <img src={star} alt="rating star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPage;
