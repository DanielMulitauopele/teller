import React, { Component } from "react";
import "./FavoriteCurrencies.css";
import Green from "../../Assets/green.svg";

class FavoriteCurrencies extends Component {
  constructor(props) {
    super(props);
  }

  controlBubbleSpeed = percent_change_24_hr => {
    let className = "";
    switch (true) {
      case percent_change_24_hr >= 6:
        className = "speed-up-4";
        //direction up
        //all speeds divided by 4
        break;
      case 4 <= percent_change_24_hr && percent_change_24_hr < 6:
        className = "speed-up-3";
        //direction up
        //all speeds divided by 3
        break;
      case 2 <= percent_change_24_hr && percent_change_24_hr < 4:
        className = "speed-up-2";
        //direction up
        //all speeds divided by 2
        break;
      case 0 <= percent_change_24_hr && percent_change_24_hr < 2:
        className = "up";
        //everything stays how it is currently in the css file
        break;
      case -2 <= percent_change_24_hr && percent_change_24_hr < 0:
        className = "down";
        //direction down
        break;
      case -4 <= percent_change_24_hr && percent_change_24_hr < -2:
        className = "speed-down-2";
        //direction down
        //all speeds divided by 2
        break;
      case -6 <= percent_change_24_hr && percent_change_24_hr < -4:
        className = "speed-down-3";
        //direction down
        //all speeds divided by 3
        break;
      case percent_change_24_hr <= -6:
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
    const { favorite } = this.props;
    const percent_change = parseInt(favorite.percent_change_24_hr)
    console.log(percent_change)
    return (
      <div className="fave-currency">
        <div className="bubbles bubbles-left">
          <div className={this.controlBubbleSpeed(percent_change)} />
          <div className={this.controlBubbleSpeed(percent_change)} />
          <div className={this.controlBubbleSpeed(percent_change)} />
        </div>
        <p className="fave-name">{favorite.name}</p>
        <p className="fave-price">${favorite.price_usd}</p>
        <div className="bubbles bubbles-right">
          <div className={this.controlBubbleSpeed(percent_change)} />
          <div className={this.controlBubbleSpeed(percent_change)} />
          <div className={this.controlBubbleSpeed(percent_change)} />
        </div>
        <div className="price-progress">
          <p>
            {percent_change < 0 ? "-" : "+"}$
            {((percent_change < 0 ? -1 : 1) * Math.round(favorite.price_usd * percent_change)) /100}{" "}
            ({percent_change}% <img className="arrow" src={Green} alt="" />)
          </p>
        </div>
      </div>
    );
  }
}

export default FavoriteCurrencies;
