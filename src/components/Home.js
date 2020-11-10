import React from "react";
import { useSelector } from "react-redux";
import "../styles/home/dist/home.css";
import TheMovieDB from "./api/TheMovieDB";
import HomeMovieSlide from "./HomeMovieSlide";
const Home = () => {
  const getPopular = useSelector((state) => state.getPopular.popular);
  const getTopRated = useSelector((state) => state.getTopRated.top_rate);
  const popularDescriptions = ["Popular movies today..."];
  const topRatedDesctiptions = ["Top movies today..."];
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <HomeMovieSlide
          titleDesc={popularDescriptions}
          data={getPopular}
          link={"popular"}
        />

        <HomeMovieSlide
          titleDesc={topRatedDesctiptions}
          data={getTopRated}
          link={"top_rate"}
        />

        <TheMovieDB />
      </div>
    </div>
  );
};

export default Home;
