import React, { Component } from "react";

import Slider from "react-slick";
import FavoriteCurrencies from "../FavoriteCurrencies/FavoriteCurrencies";
import settings from "../Settings/Settings";
import "./slick-theme.css";
import "./FavoritesContainer.css";

class FavoritesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentDidMount() {
    this.props.setFavorites()
  }

  render() {
    const { favorites, removeFromFavorites } = this.props;
    const favoriteCurrencies = favorites.map(favorite => {
      return (
        <FavoriteCurrencies
          key={favorite.id}
          favorite={favorite}
          removeFromFavorites={removeFromFavorites}
        />
      );
    });

    return (
      <div className="container-box">
        <div className="container">
          <Slider {...settings}>{favoriteCurrencies}</Slider>
        </div>
      </div>
    );
  }
}

export default FavoritesContainer;
