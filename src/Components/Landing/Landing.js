import React, { Component } from "react";
import "./Landing.css";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";
import LandingCurrencyContainer from "../LandingCurrencyContainer/LandingCurrencyContainer";
import NewsContainer from "../../Components/NewsContainer/NewsContainer";
import CurrencyExpanded from "../../Components/CurrencyExpanded/CurrencyExpanded"

class Landing extends Component {
  constructor(props) {
    super(props);

    // const { favorites, addToFavorites, removeFromFavorites, abbrevCurrencies, setFilter, removeLoginState, token } = this.props
    
    this.state = {
      active: false,
      news: [],
      displayedCurrency: "",
      displayExpanded: false
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  displayExpanded = (name) => {
    this.setState({
      displayedCurrency: name,
      displayExpanded: !this.state.displayExpanded
    })
  }

  render() {
    const {
      favorites,
      addToFavorites,
      removeFromFavorites,
      abbrevCurrencies,
      setFilter,
      token
    } = this.props;

    return (
      <div className="landing-literal">
        <NewsContainer />
        <FavoritesContainer 
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
        />
        <LandingCurrencyContainer 
          setFilter={setFilter}
          addToFavorites={addToFavorites}
          abbrevCurrencies={abbrevCurrencies}
          displayExpanded={this.displayExpanded}
          token={token}
        />
        <CurrencyExpanded
          currencies={abbrevCurrencies}
          addToFavorites={addToFavorites}
          displayedCurrency={this.state.displayedCurrency}
          displayExpanded={this.state.displayExpanded}
        />
      </div>
    );
  }
}

export default Landing;
