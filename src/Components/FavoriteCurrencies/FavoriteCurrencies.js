import React, { Component } from "react";
import "./FavoriteCurrencies.css";
import Green from "../../Assets/green.svg";
import Red from "../../Assets/red.svg";

class FavoriteCurrencies extends Component {
  constructor({ props, favorite, removeFromFavorites, addToFavorites }) {
    super(props);
  }

  controlBubbleSpeed = percent_change => {
    let className = "";
    switch (true) {
      case percent_change >= 3:
        className = "speed-up-4";
        //direction up
        //all speeds divided by 4
        break;
      case 2 <= percent_change < 3:
        className = "speed-up-3";
        //direction up
        //all speeds divided by 3
        break;
      case 1 <= percent_change < 2:
        className = "speed-up-2";
        //direction up
        //all speeds divided by 2
        break;
      case 0 <= percent_change < 1:
        className = "up";
        //everything stays how it is currently in the css file
        break;
      case -1 <= percent_change < 0:
        className = "down";
        //direction down
        break;
      case -2 <= percent_change < -1:
        className = "speed-down-2";
        //direction down
        //all speeds divided by 2
        break;
      case -3 <= percent_change < -2:
        className = "speed-down-3";
        //direction down
        //all speeds divided by 3
        break;
      case percent_change <= -3:
        className = "speed-down-4";
        //direction down
        //all speeds divided by 4
        break;
      default:
        className = "";
    }
    return className;
  };

  render() {
    const { favorite, removeFromFavorites } = this.props;
    return (
      <div className="fave-currency">
        <div className="bubbles bubbles-left">
          <div className={this.controlBubbleSpeed(favorite.percent_change)} />
          <div className={this.controlBubbleSpeed(favorite.percent_change)} />
          <div className={this.controlBubbleSpeed(favorite.percent_change)} />
        </div>
        <p className="fave-name">{favorite.name}</p>
        <p className="fave-price">${favorite.price}</p>
        <div className="bubbles bubbles-right">
          <div className={this.controlBubbleSpeed(favorite.percent_change)} />
          <div className={this.controlBubbleSpeed(favorite.percent_change)} />
          <div className={this.controlBubbleSpeed(favorite.percent_change)} />
        </div>
        <div className="price-progress">
          <p>
            {favorite.percent_change < 0 ? "-" : "+"}$
            {((favorite.percent_change < 0 ? -1 : 1) *
              Math.round(favorite.price * favorite.percent_change)) /
              100}{" "}
            ({favorite.percent_change}% <img className="arrow" src={Green} />)
          </p>
        </div>
      </div>
    );
  }
}

export default FavoriteCurrencies;
