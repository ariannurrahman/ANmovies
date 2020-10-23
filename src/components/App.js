import React, { Suspense } from "react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import history from "../history";
// import TheMovieDB from "./api/TheMovieDB";
import "../styles/dist/style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Router history={history}>
          <Header />
          <Route path="/" exact component={Home} />
        </Router>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
