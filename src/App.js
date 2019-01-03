import React, { Component } from "react";
import "./App.css";
import Hotdog from "./Components/Hotdog/Hotdog";
import DataCleaner from "./Utils/Cleaners/";
import Search from "./Components/Search/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import NotesContainer from "./Components/NotesContainer/NotesContainer"
import LoginContainer from "./Components/LoginContainer/LoginContainer";
import Onboarding from "./Components/Onboarding/Onboarding";
import AboutUs from "./Components/AboutUs/AboutUs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [
        {
          id: 12345,
          name: "No favorites saved",
          price: "0",
          percent_change: "0"
        }
      ],
      abbrevCurrencies: [],
      expandedCurrencies: [],
      userEmail: "",
      news: [],
      loggedIn: false,
      notes: [],
      token: ''
    };
    this.cleaner = new DataCleaner();
  }

  async componentDidMount() {
    const abbrevCurrencies = await this.cleaner.getAbbrevCurrencies();
    const expandedCurrencies = await this.cleaner.getExpandedCurrencies();
    this.setState({ abbrevCurrencies, expandedCurrencies });
  }

  addToFavorites = favorite => {
    const { favorites } = this.state;
    const newFave = { id: Date.now(), ...favorite };
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
    const { notes } = this.state;
    const newNote = { id: Date.now(), ...note };
    this.setState({
      notes: [newNote, ...notes]
    });
  };

  removeFromNotes = id => {
    const filteredNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes: filteredNotes });
  };

  logInUser = userEmail => {
    this.setState({ userEmail });
    this.setState({ loggedIn: true });
  };

  setLoginState = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };

  displaySearch = async currency => {
    let abbCurr;
    let expCurr;
    const { abbrevCurrencies, expandedCurrencies } = this.state;
    if (currency === "") {
      abbCurr = await this.cleaner.getAbbrevCurrencies();
      expCurr = await this.cleaner.getExpandedCurrencies();
    } else {
      abbCurr = abbrevCurrencies.filter(
        curr =>
          curr.name.toUpperCase().includes(currency.toUpperCase()) ||
          curr.name.toUpperCase() === currency.toUpperCase()
      );
      expCurr = expandedCurrencies.filter(
        curr =>
          curr.name.toUpperCase().includes(currency.toUpperCase()) ||
          curr.name.toUpperCase() === currency.toUpperCase()
      );
    }
    this.setState({
      abbrevCurrencies: abbCurr,
      expandedCurrencies: expCurr
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

  storeToken = (token) => {
    this.setState({ token: token.teller_api_token })
    console.log(this.state.token)
  }

  render() {
    const { abbrevCurrencies, favorites, notes } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.loggedIn && <Hotdog setLoginState={this.setLoginState} />}
          {this.state.loggedIn && <Search displaySearch={this.displaySearch} />}
          {this.state.loggedIn && (
            <div className="app-subtle-bg">
              <h1>teller.</h1>
              <p> Your Personal Crypto Analyst </p>
            </div>
          )}
          <Switch>
            <Route
              exact
              path="/home"
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
              path="/"
              render={() => {
                return <LoginContainer 
                          loggedIn={this.setLoginState}
                          storeToken={this.storeToken} />;
              }}
            />
            <Route
              exact
              path="/onboarding"
              render={() => {
                return <Onboarding />;
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
                );
              }}
            />
            <Route
              exact
              path="/about"
              render={() => {
                return <AboutUs />;
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
