import React, { Component } from "react";
import "./LandingCurrency.css";
import Heart from "../../Assets/heart.svg";
import HeartP from "../../Assets/heartpink.svg";
import { Icons } from "../../Assets/cryptoIcons/cryptoIcons";
import DataCleaner from "../../Utils/Cleaners/";
import { sendFavorites } from "../../Utils/API/";
import LineChart from "../LineChart/LineChart"
class LandingCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      faved: false,
      token: this.props.token
    };
    this.cleaner = new DataCleaner();
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  faved = () => {
    this.setState({
      faved: !this.state.faved
    });
  };

  handleClick = async e => {
    const { name } = e.target;
    if (!this.state.token) {
      return
    } else {
      const fave = await this.cleaner.formatFavorite(name);
      sendFavorites(JSON.stringify({
            "name": fave.name,
            "price_usd": fave.price,
            "percent_change_24_hr": fave.percent_change
          }), this.props.token)
      this.props.addToFavorites();
      this.faved();
      this.props.displayExpanded(this.props.currency.name)
    }
  };

  render() {
    const { symbol, name, price, percent_change } = this.props.currency;
    const { expanded } = this.state;
    return (
      <div className="currency-card">
        <div className="card-inside-text">
          <div className="cc-left">
            <img src={Icons[this.props.currency.symbol]} alt="" />
          </div>
          <div className="cc-center">
            <p>{symbol}</p>
            <p>{name}</p>
          </div>
          <div className="cc-center-right">
            <p>$ {price}</p>
          </div>
          <div className="cc-right">
            <p>{percent_change}</p>
          </div>
          <div
            className={expanded ? "expansion-dots-glowing" : "expansion-dots"}
            onClick={this.expand}
          >
            <div />
            <div />
            <div />
          </div>
        </div>
        {this.state.expanded && (
          <div className="expanded-currency">
            <button
              className="ec-right"
              onClick={this.handleClick}
              name={name}>
              View
            </button>
            <img
              name={name}
              src={this.state.faved ? HeartP : Heart}
              className="fave-this"
              onClick={this.handleClick}
              alt=""
            />
            <LineChart />
          </div>
        )}
      </div>
    );
  }
}

export default LandingCurrency;
