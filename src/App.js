import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FavoritesContainer } from "./Components/FavoritesContainer/FavoritesContainer";
import Hotdog from "./Components/Hotdog/Hotdog";
import LandingCurrencyContainer from "./Components/LandingCurrencyContainer/LandingCurrencyContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      favorites: [1, 2, 3, 4, 5]
    };

    const addToFavorites = favorite => {
      this.setState({ favorites: [favorite, ...this.state.favorites] });
    };

    const removeFromFavorites = id => {
      const filteredFavorites = this.state.favorites.filter(
        favorite => favorite.id !== id
      );
      this.setState({ filteredFavorites });
    };
  }

  render() {
    return (
      <div className="App">
        <Hotdog />
        <FavoritesContainer
          favorites={this.state.favorites}
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites}
        />
        <LandingCurrencyContainer />
      </div>
    );
  }
}

export default App;
