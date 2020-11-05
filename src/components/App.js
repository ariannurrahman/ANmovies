import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import "../styles/dist/style.css";
import PopularPage from "./PopularPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/popular/:slug" exact component={PopularPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
