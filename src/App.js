import React, { Component } from "react";
import "./App.css";
import { FavoritesContainer } from "./Components/FavoritesContainer/FavoritesContainer";
import Hotdog from "./Components/Hotdog/Hotdog";
import LandingCurrencyContainer from "./Components/LandingCurrencyContainer/LandingCurrencyContainer";
import DataCleaner from "./Utils/Cleaners/";
import Search from "./Components/Search/Search";
import { Route, withRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import Login from "./Components/LoginForm/LoginForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [1, 2, 3, 4, 5],
      abbrevCurrencies: [],
      expandedCurrencies: [],
      userEmail: "",
      news: []
    };
  }

  async componentDidMount() {
    const cleaner = new DataCleaner();
    const abbrevCurrencies = await cleaner.getAbbrevCurrencies();
    const expandedCurrencies = await cleaner.getExpandedCurrencies();
    this.setState({ abbrevCurrencies, expandedCurrencies });
  }

  addToFavorites = favorite => {
    this.setState({ favorites: [favorite, ...this.state.favorites] });
  };

  removeFromFavorites = id => {
    const filteredFavorites = this.state.favorites.filter(
      favorite => favorite.id !== id
    );
    this.setState({ favorites: filteredFavorites });
  };

  logInUser = userEmail => {
    this.setState({ userEmail });
  };

  displaySearch = currency => {
    const { abbrevCurrencies, expandedCurrencies } = this.state;
    const abbCurr = abbrevCurrencies.find(
      curr => curr.name.toUpperCase() === currency.toUpperCase()
    );
    const expCurr = expandedCurrencies.find(
      curr => curr.name.toUpperCase() === currency.toUpperCase()
    );
    this.setState({
      abbrevCurrencies: [abbCurr],
      expandedCurrencies: [expCurr]
    });
  };

  setFilter = filterCategory => {
    const { abbrevCurrencies, expandedCurrencies } = this.state;
    let sortedAbbrev;
    let sortedExp;
    if (filterCategory === "Rank") {
      sortedAbbrev = abbrevCurrencies.sort((a, b) => a.rank - b.rank);
      sortedExp = expandedCurrencies.sort((a, b) => a.rank - b.rank);
    } else if (filterCategory === "Price") {
      sortedAbbrev = abbrevCurrencies.sort((a, b) => a.price - b.price);
      sortedExp = expandedCurrencies.sort((a, b) => a.price - b.price);
    } else if (filterCategory === "%Change") {
      sortedAbbrev = abbrevCurrencies.sort(
        (a, b) => a.percent_change - b.percent_change
      );
      sortedExp = expandedCurrencies.sort(
        (a, b) => a.percent_change - b.percent_change
      );
    }
    this.setState({
      abbrevCurrencies: sortedAbbrev,
      expandedCurrencies: sortedExp
    });
  };

  render() {
    const { abbrevCurrencies, favorites } = this.state;
    return (
      <div className="App">
        <Hotdog />
        {/* //         <LoginForm logInUser={this.logInUser}/>
//         <RegisterForm />
//         <LandingCurrencyContainer abbrevCurrencies={abbrevCurrencies} /> */}
        <Search displaySearch={this.displaySearch} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Landing
                  favorites={favorites}
                  addToFavorites={this.addToFavorites}
                  removeFromFavorites={this.removeFromFavorites}
                  abbrevCurrencies={abbrevCurrencies}
                  setFilter={this.setFilter}
                />
              );
            }}
          />
          )}}
          <Route
            exact
            path="/a"
            render={() => {
              return <Login />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
