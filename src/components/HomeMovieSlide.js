import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PLAY } from "../actions";
import "../styles/popular/dist/home-movie-slide.css";
const HomeMovieSlide = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickPlay = (event) => {
    const { name } = event.target;
    dispatch(PLAY(name));
    history.push(`/${props.link}/${name}`);
  };
  const renderPopular = () => {
    if (!props.data) return;

    const aboveThousand = props.data.sort(
      (a, b) => b.popularity - a.popularity
    );

    return aboveThousand.map((item, index) => {
      if (index <= 7) {
        return (
          <div className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
            />
            <input
              type="button"
              value="Go to movie..."
              name={item.id}
              onClick={onClickPlay}
            />
          </div>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="popular-container">
      <div className="popular-desc">{props.titleDesc}</div>
      <div className="popular-card">{renderPopular()}</div>
    </div>
  );
};

export default HomeMovieSlide;
