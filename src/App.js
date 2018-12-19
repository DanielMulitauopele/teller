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

    addToFavorites = (favorite) => {
      this.setState({ favorites: [favorite, ...this.state.favorites] });
    };

    removeFromFavorites = (id) => {
      const filteredFavorites = this.state.favorites.filter(favorite => favorite.id !== id);
      this.setState({filteredFavorites})
    }
  }

  render() {
    const 
    return (
      <div className="App">
        <Hotdog />
        <FavoritesContainer addToFavorites = {this.addToFavorites} removeFromFavorites = {this.removeFromFavorites}/>
      </div>
    );
  }
}

export default App;
