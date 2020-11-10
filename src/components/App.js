import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import "../styles/dist/style.css";
import StreamPage from "./StreamPage";
import { useSelector } from "react-redux";
import About from "./About";
import Footer from "./Footer";
const App = () => {
  const popularData = useSelector((state) => state.getPopular.popular);
  const topRateData = useSelector((state) => state.getTopRated.top_rate);
  const genreData = useSelector((state) => state.getGenre.genre_id);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/popular/:movie_id"
          exact
          component={() => <StreamPage data={popularData} genre={genreData} />}
        />
        <Route
          path="/top_rate/:movie_id"
          exact
          component={() => <StreamPage data={topRateData} genre={genreData} />}
        />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
