import React from "react";
import { useSelector } from "react-redux";
import "../styles/moviecard/dist/moviecard.css";
const Search = () => {
  const data = useSelector((state) => state.searchQuery.query);

  const onClickHandler = (e) => {
    console.log(e.target.name);
  };

  const renderMovie = () => {
    if (!data) return;
    const filterImageData = data.filter((item) => item.backdrop_path != null);

    return filterImageData.map((item, index) => (
      <div className="movie-card" key={index}>
        <div className="movie-card-top">
          <img
            src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
            alt=""
            key={index}
            name={item.id}
            onClick={onClickHandler}
          />
        </div>
        <div className="movie-card-bottom">
          <div className="movie-card-title">
            <div id="title">{item.original_title}</div>
            <div id="vote">{item.vote_average}</div>
          </div>
          <div className="movie-card-overview">
            <div>
              {item.overview.length >= 300
                ? item.overview.slice(0, 300) + "..."
                : item.overview}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="tmdb-container">
      <div className="tmdb-wrapper">{renderMovie()}</div>
    </div>
  );
};

export default Search;
