import React, { Component } from "react";

import Slider from "react-slick";
import FavoriteCurrencies from "../FavoriteCurrencies/FavoriteCurrencies";
import settings from "../Settings/Settings";
import "./slick-theme.css";
import "./FavoritesContainer.css";
import TellerAI from "../tellerAI/tellerAI";

class FavoritesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    const { favorites } = this.props;
    const favoriteCurrencies = favorites.map(favorite => {
      return (
        <FavoriteCurrencies
          {...favorite}
          key={favorite.id}
          removeFavorite={this.props.removeFromFavorites}
          addFavorite={this.props.addToFavorites}
        />
      );
    });

    return (
      <div className="container-box">
        <div className="container">
          <Slider {...settings}>{favoriteCurrencies}</Slider>
        </div>
        <TellerAI />
      </div>
    );
  }
}

export default FavoritesContainer;
