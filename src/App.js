import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FavoritesContainer from "./Components/FavoritesContainer/FavoritesContainer";
import Hotdog from "./Components/Hotdog/Hotdog";

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    };
  }
  render() {
    return (
      <div className="App">
        <Hotdog />
        <FavoritesContainer />
      </div>
    );
  }
}

export default App;
