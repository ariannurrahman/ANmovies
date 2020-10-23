import React, { useState } from "react";
import "../styles/home/dist/home.css";
import TheMovieDB from "./api/TheMovieDB";

const Home = () => {
  const [searchChange, setSearchChange] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchBar = (event) => {
    setSearchChange(event.target.value);
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchChange);
  };

  return (
    <div className="home-container">
      <form onSubmit={onSearchSubmit}>
        <input type="text" onChange={searchBar} value={searchChange} />
        <input type="submit" />
      </form>
      <TheMovieDB searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
