import React, { Component } from "react";
import "./App.css";
import { FavoritesContainer } from "./Components/FavoritesContainer/FavoritesContainer";
import Hotdog from "./Components/Hotdog/Hotdog";
import LandingCurrencyContainer from "./Components/LandingCurrencyContainer/LandingCurrencyContainer";
import DataCleaner from "./Utils/Cleaners/";
import Search from "./Components/Search/Search";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import Login from "./Components/LoginForm/LoginForm";
import { coinNames } from "./Components/Search/CoinNames";
import NotesContainer from "./Components/NotesContainer/NotesContainer"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [{
        name: "No favorites saved", 
        price: "0",
        percent_change: "0"
      }],
      abbrevCurrencies: [],
      expandedCurrencies: [],
      userEmail: "",
      news: [],
      notes: []
    };
    this.cleaner = new DataCleaner();
  }

  async componentDidMount() {
    const abbrevCurrencies = await this.cleaner.getAbbrevCurrencies();
    const expandedCurrencies = await this.cleaner.getExpandedCurrencies();
    this.setState({ abbrevCurrencies, expandedCurrencies });
  }

  addToFavorites = favorite => {
    const { favorites } = this.state
    const newFave = {id: Date.now(), ...favorite}
    if (favorites.length < 5) {
      this.setState({ favorites: [newFave, ...favorites] });
    } else if (favorites.length >= 5) {
      this.setState({
        favorites: [newFave, ...favorites.slice(0, 4)]
      });
    }
  };

  removeFromFavorites = id => {
    const filteredFavorites = this.state.favorites.filter(
      favorite => favorite.id !== id
    );
    this.setState({ favorites: filteredFavorites });
  };

  addToNotes = note => {
    const { notes } = this.state
    const newNote = {id: Date.now(), ...note}
    this.setState({
      notes: [newNote, ...notes]
    })
  }

  removeFromNotes = id => {
    const filteredNotes = this.state.notes.filter(note => note.id !== id)
    this.setState({ notes: filteredNotes })
  }

  logInUser = userEmail => {
    this.setState({ userEmail });
  };


  displaySearch = async currency => {
    const { abbrevCurrencies, expandedCurrencies } = this.state
    let abbCurr
    let expCurr
    if (currency === "") {
      abbCurr = await this.cleaner.getAbbrevCurrencies();
      expCurr = await this.cleaner.getExpandedCurrencies();
    } else {
      abbCurr = abbrevCurrencies.filter(curr => curr.name.toUpperCase().includes(currency.toUpperCase()) || curr.name.toUpperCase() === currency.toUpperCase())
      expCurr = expandedCurrencies.filter(curr => curr.name.toUpperCase().includes(currency.toUpperCase()) || curr.name.toUpperCase() === currency.toUpperCase())
      this.setState({
        abbrevCurrencies: abbCurr,
        expandedCurrencies: expCurr
      })
    }
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
      sortedAbbrev = abbrevCurrencies.sort((a, b) => a.percent_change - b.percent_change);
      sortedExp = expandedCurrencies.sort((a, b) => a.percent_change - b.percent_change);
    }
    this.setState({
      abbrevCurrencies: sortedAbbrev,
      expandedCurrencies: sortedExp
    });
  };

  render() {
    const { abbrevCurrencies, favorites, notes } = this.state;
    return (
      <BrowserRouter>
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
              path="/login"
              render={() => {
                return <Login />;
              }}
            />
            <Route 
              exact
              path="/notes"
              render={() => {
                return (
                  <NotesContainer 
                    notes={notes}
                    addToNotes={this.addToNotes}
                    removeFromNotes={this.removeFromNotes}
                  />
                )
              }}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
