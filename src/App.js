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
import { fetchFavorites, fetchNotes } from "./Utils/API/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      currencies: [],
      userEmail: "",
      news: [],
      loggedIn: false,
      notes: [],
      token: ""
    };
    this.cleaner = new DataCleaner();
  }

  async componentDidMount() {
    this.checkUser();
    this.setCurrencies();
  }

  checkUser = async () => {
    let token
    let userEmail
    if (!this.state.token && localStorage.getItem("userToken") !== null) {
      token = JSON.parse(localStorage.getItem("userToken"));
    }
    if(!this.state.userEmail && localStorage.getItem("userEmail") !== null) {
      userEmail = JSON.parse(localStorage.getItem("userEmail"))
    }
    this.setState({
      token: token.teller_api_token,
      userEmail: userEmail,
      loggedIn: true,
    });
    this.setNotes()
  };

  setCurrencies = async () => {
    const currencies = await this.cleaner.getCurrencies();
    this.setState({
      currencies,
    });
  };

  setFavorites = async () => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    // debugger
    const favorites = await fetchFavorites(token.teller_api_token);
    this.setState({
      favorites
    })
  }

  setNotes = async () => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    const notes = await fetchNotes(token.teller_api_token);
    this.setState({
      notes
    })
  }

  addToFavorites = async (favorite) => {
    const { favorites } = this.state
    this.setState({
      favorites: [favorite, ...favorites]
    })
    // let favorites
    // if(favorite !== null) {
    //   this.setState({
    //     favorites: [favorite, ...this.state.favorites]
    //   })
    // } else if (!this.state.token && (favorite === null || undefined)) {
    //   favorites = [
    //     {
    //       id: 12345,
    //       name: "No favorites saved",
    //       price_usd: 0,
    //       percent_change_24_hr: 0
    //     }
    //   ];
    //   this.setState({ favorites });
    // } else {
    //   favorites = await fetchFavorites(this.state.token);
    //   this.setState({ favorites });
    // }
  };

  // removeFromFavorites = id => {
  //   const filteredFavorites = this.state.favorites.filter(
  //     favorite => favorite.id !== id
  //   );
  //   this.setState({ favorites: filteredFavorites });
  // };

  addToNotes = async (note) => {
    const { notes } = this.state
    this.setState({
      notes: [note, ...notes]
    })
    // let notes;
    // if(note !== null) {
    //   this.setState({
    //     notes: [note, ...this.state.notes]
    //   })
    // } else if (!this.state.token && (note === null || undefined)) {
    //   notes = [
    //     {
    //       id: 12345,
    //       title: "No notes saved.",
    //       body: "You must create an account to save notes."
    //     }
    //   ];
    //   this.setState({ notes });
    // } else {
    //   notes = await fetchNotes(this.state.token);
    //   this.setState({ notes });
    // }
  };

  // removeFromNotes = id => {
  //   const filteredNotes = this.state.notes.filter(note => note.id !== id);
  //   this.setState({ notes: filteredNotes });
  // };

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
    });
  };

  displaySearch = async currency => {
    let abbCurr;
    const { currencies } = this.state;
    if (currency === "") {
      abbCurr = await this.cleaner.getCurrencies();
    } else {
      abbCurr = currencies.filter(
        curr =>
          curr.name.toUpperCase().includes(currency.toUpperCase()) ||
          curr.name.toUpperCase() === currency.toUpperCase()
      );
    }
    this.setState({
      currencies: abbCurr,
    });
  };

  setFilter = filterCategory => {
    const { currencies } = this.state;
    let sortedAbbrev;
    if (filterCategory === "Rank") {
      sortedAbbrev = currencies.sort((a, b) => a.rank - b.rank);
    } else if (filterCategory === "Price") {
      sortedAbbrev = currencies.sort((a, b) => a.price - b.price);
    } else if (filterCategory === "%Change") {
      sortedAbbrev = currencies.sort(
        (a, b) => a.percent_change - b.percent_change
      );
    }
    this.setState({
      currencies: sortedAbbrev,
    });
  };

  storeUserInfo = (token, email) => {
    this.setState({
      token: token.teller_api_token,
      userEmail: email,
      loggedIn: true
    });
    localStorage.setItem("userToken", JSON.stringify(token));
    localStorage.setItem("userEmail", JSON.stringify(email));
    console.log(this.state.token);
    console.log(this.state.userEmail);
  };

  clearUser = () => {
    localStorage.clear();
    this.setState({
      favorites: [],
      currencies: [],
      userEmail: "",
      news: [],
      loggedIn: false,
      notes: [],
      token: ""
    });
  };

  render() {
    const { currencies, favorites, notes, token } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.loggedIn && (
            <Hotdog
              removeLoginState={this.removeLoginState}
              clearUser={this.clearUser}
            />
          )}

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
                      currencies={currencies}
                      setFilter={this.setFilter}
                      removeLoginState={this.removeLoginState}
                      token={token}
                      setFavorites={this.setFavorites}
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
                    storeUserInfo={this.storeUserInfo}
                    setNotes={this.setNotes}
                    setFavorites={this.setFavorites}
                    setCurrencies={this.setCurrencies}
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
                return <RegisterForm storeUserInfo={this.storeUserInfo} />;
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
