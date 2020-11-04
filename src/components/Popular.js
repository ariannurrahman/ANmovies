import React from "react";
import { useSelector } from "react-redux";
import "../styles/popular/dist/popular.css";
const Popular = () => {
  const getPopular = useSelector((state) => state.getPopular.popular);

  const renderPopular = () => {
    if (!getPopular) return;

    const aboveThousand = getPopular.filter((pop) => pop.popularity > 1000);

    return aboveThousand.map((item, index) => (
      <div className="card" key={index}>
        <img
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt=""
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
