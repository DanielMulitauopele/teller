import React, { Component } from "react";
import "./FavoriteCurrencies.css";
import Green from "../../Assets/green.svg";
import Red from "../../Assets/red.svg"

class FavoriteCurrencies extends Component {
  constructor({
      props,
      favorite, 
      removeFromFavorites, 
      addToFavorites
    }) {
    super(props)
  }

  render() {
    const { favorite, removeFromFavorites } = this.props
    return (
      <div className="fave-currency">
        <div className="bubbles bubbles-left">
          <div />
          <div />
          <div />
        </div>
        <p className="fave-name">{favorite.name}</p>
        <p className="fave-price">$
          {favorite.price}.<span>00</span>
        </p>
        <div className="bubbles bubbles-right">
          <div />
          <div />
          <div />
        </div>
        <div className="price-progress">
          <p>
            {favorite.percent_change < 0 ? "-": "+"}${-1 * Math.round(favorite.price * favorite.percent_change * 100)/100} ({favorite.percent_change}% <img className="arrow" src={Green} />)
          </p>
        </div>
      </div>
    );
  }
};

export default FavoriteCurrencies;
