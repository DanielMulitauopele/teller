import React, { Component } from "react";
import "./App.css";
import { FavoritesContainer } from "./Components/FavoritesContainer/FavoritesContainer";
import Hotdog from "./Components/Hotdog/Hotdog";
import LandingCurrencyContainer from "./Components/LandingCurrencyContainer/LandingCurrencyContainer";
// import DataCleaner from "./Utils/Cleaners/"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [1, 2, 3, 4, 5],
      currencies: []
    }

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

  async componentDidMount(){
    // const cleaner = new DataCleaner()
    // const currencyData = await cleaner.getCurrencies()
    // console.log(currencyData)
    const url = 'https://cors-anywhere.herokuapp.com/https://guarded-reef-25579.herokuapp.com/api/v1/assets'
    const response = await fetch(url, {
      header: 'Access-Control-Allow-Origin'
    })
      if (response.status >= 300) {
        throw new Error('Fetch has failed')
      } else {
        const results = await response.json()
        const currencies = results.map(coin => {
          const newCoin = {key: coin.symbol , ...coin}
          return newCoin
        })
        this.setState({currencies})
      }
  }

  render() {
    const { currencies, favorites } = this.state
    return (
      <div className="App">
        <Hotdog />
        <FavoritesContainer
          favorites={favorites}
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites}
        />
        <LandingCurrencyContainer currencies={currencies} />
      </div>
    );
  }
}

export default App;
