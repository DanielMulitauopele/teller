import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FavoritesContainer from "./Components/FavoritesContainer/FavoritesContainer";

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
        <FavoritesContainer />
      </div>
    );
  }
}

export default App;
