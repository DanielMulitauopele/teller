import React, { Component } from "react";
import "./App.css";
import Hotdog from "./Components/Hotdog/Hotdog";
import DataCleaner from "./Utils/Cleaners/";
import Search from "./Components/Search/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import NotesContainer from "./Components/NotesContainer/NotesContainer";
import LoginContainer from "./Components/LoginContainer/LoginContainer";
import Onboarding from "./Components/OnboardingContainer/OnboardingContainer";
import AboutUs from "./Components/AboutUs/AboutUs";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import { Invalid } from "./Components/Invalid/Invalid";
import { fetchFavorites, fetchNotes } from "./Utils/API/"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      abbrevCurrencies: [],
      expandedCurrencies: [],
      userEmail: "",
      news: [],
      loggedIn: false,
      notes: [],
      token: ""
    };
    this.cleaner = new DataCleaner();
  }

  async componentDidMount() {
    const abbrevCurrencies = await this.cleaner.getAbbrevCurrencies();
    const expandedCurrencies = await this.cleaner.getExpandedCurrencies();
    this.checkToken()
    this.addToFavorites()
    this.addToNotes()
    this.setState({
      abbrevCurrencies,
      expandedCurrencies,
    });
  }

  addToFavorites = async () => {
    const favorites = await fetchFavorites(this.state.token)
    this.setState({ favorites })
  };

  removeFromFavorites = id => {
    const filteredFavorites = this.state.favorites.filter(
      favorite => favorite.id !== id
    );
    this.setState({ favorites: filteredFavorites });
  };

  addToNotes = async () => {
    const notes = await fetchNotes(this.state.token)
    this.setState({ notes })
  };

  removeFromNotes = id => {
    const filteredNotes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes: filteredNotes });
  };

  toggleLogIn = userEmail => {
    this.setState({
      userEmail,
      loggedIn: true
    });
  };

  setLoginState = () => {
    this.setState({
      loggedIn: true
    });
  };

  removeLoginState = () => {
    this.setState({
      loggedIn: false,
      token: ""
    })
  }

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

  storeToken = token => {
    this.setState({
      token: token.teller_api_token,
      loggedIn: true
    });
    localStorage.setItem("userToken", JSON.stringify(token));
    console.log(this.state.token);
  };

  checkToken = () => {
    // debugger
    if (this.state.token || localStorage.getItem("userToken") !== null) {
      const token = JSON.parse(localStorage.getItem("userToken"))
        .teller_api_token;
      this.setState({
        token: token,
        loggedIn: true
      });
    }
  };

  render() {
    const { abbrevCurrencies, favorites, notes, token } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Hotdog removeLoginState={this.removeLoginState} />

          <Switch>
            <Route
              exact
              path="/home"
              render={() => {
                return (
                  <div>
                    <Landing
                      favorites={favorites}
                      addToFavorites={this.addToFavorites}
                      removeFromFavorites={this.removeFromFavorites}
                      abbrevCurrencies={abbrevCurrencies}
                      setFilter={this.setFilter}
                      removeLoginState={this.removeLoginState}
                      token={token}
                    />
                    <Search displaySearch={this.displaySearch} />
                    {this.state.loggedIn && (
                      <div className="app-subtle-bg">
                        <h1>teller.</h1>
                        <p> Your Personal CryptoCurrency Analyst </p>
                      </div>
                    )}
                  </div>
                );
              }}
            />
            )
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <LoginContainer
                    loggedIn={this.setLoginState}
                    toggleLogIn={this.toggleLogIn}
                    storeToken={this.storeToken}
                  />
                );
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
                  <div>
                    {this.state.loggedIn && (
                      <div className="app-subtle-bg">
                        <h1>teller.</h1>
                        <p> Your Personal CryptoCurrency Analyst </p>
                      </div>
                    )}
                    <NotesContainer
                      notes={notes}
                      addToNotes={this.addToNotes}
                      removeFromNotes={this.removeFromNotes}
                      token={token}
                    />
                  </div>
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
                );
              }}
            />
            <Route
              exact
              path="/register"
              render={() => {
                return <RegisterForm />;
              }}
            />
            <Route component={Invalid} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
