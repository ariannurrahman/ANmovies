import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../styles/popular/dist/stream-page.css";
import MoviePlayer from "./MoviePlayer";
import star from "../images/icon/star.svg";
const PopularPage = (props) => {
  const history = useHistory();
  const [dataEachPage, setDataEachPage] = useState({
    img: null,
    title: "",
    poster: null,
    rating: null,
    genre: null,
  });
  const [genreById, setGenreById] = useState();
  const { movie_id } = useParams();

  useEffect(() => {
    if (!props.data) {
      return history.push("/");
    }
    const eachPage = props.data.find((each) => {
      return each.id + "" === movie_id;
    });
    setDataEachPage({
      img: eachPage.poster_path,
      title: eachPage.title,
      overview: eachPage.overview,
      rating: eachPage.vote_average,
      genreList: eachPage.genre_ids,
    });
    if (!dataEachPage.genreList) return;
    const filtered = dataEachPage.genreList.map((genre) => {
      return props.genre.filter((allGenreList) => {
        return genre === allGenreList.id;
      });
    });
    setGenreById(filtered);
  }, [
    setDataEachPage,
    movie_id,
    props.data,
    history,
    dataEachPage.genreList,
    props.genre,
    setGenreById,
  ]);

  return (
    <div className="pp-container">
      <div className="pp-wrapper">
        <div className="pp-top">
          <div className="pp-title">{dataEachPage.title}</div>
          <div className="pp-top_bottom">
            <div className="movie-player-container">
              <MoviePlayer />
            </div>
          </div>
        </div>
        <div className="pp-bottom">
          <img
            src={`https://image.tmdb.org/t/p/w500${dataEachPage.img}`}
            alt=""
          />
          <div className="pp-bottom_right">
            <div className="pp-overview">{dataEachPage.overview}</div>
            <div className="pp-genre-wrapper">
              {genreById
                ? genreById.map((genre) =>
                    genre.map((item, index) => (
                      <div className="pp-genre-content" key={index}>
                        {item.name}
                      </div>
                    ))
                  )
                : null}
            </div>
            <div className="pp-rating-container">
              <div className="pp-rating">{dataEachPage.rating}</div>
              <img src={star} alt="rating star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPage;
