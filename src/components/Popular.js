import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PLAY } from "../actions";
import "../styles/popular/dist/popular.css";
const Popular = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const getPopular = useSelector((state) => state.getPopular.popular);

  const onClickPlay = (event) => {
    const { name } = event.target;
    dispatch(PLAY(name));
    history.push(`/popular/${name}`);
  };
  const renderPopular = () => {
    if (!getPopular) return;
    const aboveThousand = getPopular.filter((pop) => pop.popularity > 800);

    return aboveThousand.map((item, index) => (
      <div className="card" key={index}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
        />
        {/* <input
          type="button"
          value="Play"
          name={item.id}
          onClick={onClickPlay}
        /> */}
        <input
          type="button"
          value="Go to movie..."
          name={item.id}
          onClick={onClickPlay}
        />
      </div>
    ));
  };

  return (
    <div className="popular-container">
      <div className="popular-desc">Popular right now...</div>
      <div className="popular-card">{renderPopular()}</div>
    </div>
  );
};

export default Popular;
