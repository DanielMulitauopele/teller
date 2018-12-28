import React, { Component } from "react";
import "./Landing.css";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";
import LandingCurrencyContainer from "../LandingCurrencyContainer/LandingCurrencyContainer";

class Landing extends Component {
  constructor({
    props,
    abbrevCurrencies,
    favorites,
    addToFavorites,
    removeFromFavorites
  }) {
    super(props);
    this.state = {
      active: false,
      news: []
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    const { active } = this.state;
    const {
      favorites,
      addToFavorites,
      removeFromFavorites,
      abbrevCurrencies
    } = this.props;

    return (
      <div className="landing-literal">
        <FavoritesContainer {...this.props} />
        <LandingCurrencyContainer abbrevCurrencies={abbrevCurrencies} />
      </div>
    );
  }
}

export default Landing;
