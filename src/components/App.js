import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import "../styles/dist/style.css";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
