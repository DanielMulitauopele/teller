import React, { Component } from "react";
import "./App.css";
import { FavoritesContainer } from "./Components/FavoritesContainer/FavoritesContainer";
import Hotdog from "./Components/Hotdog/Hotdog";
import LandingCurrencyContainer from "./Components/LandingCurrencyContainer/LandingCurrencyContainer";
import DataCleaner from "./Utils/Cleaners/"
import LoginForm from "./Components/LoginForm/LoginForm"
import RegisterForm from './Components/RegisterForm/RegisterForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [1, 2, 3, 4, 5],
      abbrevCurrencies: [],
      expandedCurrencies: [],
      userEmail: ''
    }
  }

  async componentDidMount(){
    const cleaner = new DataCleaner()
    const abbrevCurrencies = await cleaner.getAbbrevCurrencies()
    const expandedCurrencies = await cleaner.getExpandedCurrencies()
    this.setState({abbrevCurrencies, expandedCurrencies})
  }

  addToFavorites = favorite => {
    this.setState({ favorites: [favorite, ...this.state.favorites] });
  }

  removeFromFavorites = id => {
    const filteredFavorites = this.state.favorites.filter(favorite => favorite.is !==id);
    this.setState({ favorites: filteredFavorites });
  }

  logInUser = userEmail => {
    this.setState({ userEmail })
  }

  render() {
    const { abbrevCurrencies, favorites } = this.state
    return (
      <div className="App">
        <Hotdog />
        <FavoritesContainer
          favorites={favorites}
          addToFavorites={this.addToFavorites}
          removeFromFavorites={this.removeFromFavorites}
        />
        <LoginForm logInUser={this.logInUser}/>
        <LandingCurrencyContainer abbrevCurrencies={abbrevCurrencies} />
      </div>
    );
  }
}

export default App;
