import React, { Component } from "react";

import Slider from "react-slick";
import FavoriteCurrencies from "../FavoriteCurrencies/FavoriteCurrencies";
import settings from "../Settings/Settings";
import "./slick-theme.css";
import "./FavoritesContainer.css";
import TellerAI from "../tellerAI/tellerAI";

class FavoritesContainer extends Component {
  constructor({
      props,
      favorites,
      addToFavorites,
      removeFromFavorites,
      abbrevCurrencies,
      setFilter
    }) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { 
      favorites, 
      removeFromFavorites, 
      addToFavorites } = this.props;
    const favoriteCurrencies = favorites.map(favorite => {
      return (
        <FavoriteCurrencies
          key={favorite.id}
          favorite={favorite}
          removeFromFavorites={removeFromFavorites}
          addToFavorites={addToFavorites}
        />
      );
    });

    return (
      <div className="container-box">
        <div className="container">
          <Slider {...settings}>{favoriteCurrencies}</Slider>
        </div>
        {/* <TellerAI /> */}
      </div>
    );
  }
}

export default FavoritesContainer;
