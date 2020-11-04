import React from "react";
import "../styles/home/dist/home.css";
import TheMovieDB from "./api/TheMovieDB";
import Popular from "./Popular";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <Popular />
        <TheMovieDB />
      </div>
    </div>
  );
};

export default Home;
