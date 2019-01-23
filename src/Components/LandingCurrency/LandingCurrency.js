import React, { Component } from "react";
import "./LandingCurrency.css";
import Heart from "../../Assets/heart.svg";
import HeartP from "../../Assets/heartpink.svg";
import { Icons } from "../../Assets/cryptoIcons/cryptoIcons";
import DataCleaner from "../../Utils/Cleaners/";
import { sendFavorites } from "../../Utils/API/";
// import LineChart from "../LineChart/LineChart"
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
    this.props.displayExpanded(name)
  };

  handleFaveClick = async e => {
    // const { name } = e.target;
    const { addToFavorites, currency } = this.props
    sendFavorites(JSON.stringify({
      "name": currency.name,
      "price_usd": currency.price,
      "percent_change_24_hr": currency.percent_change
    }), this.props.token)
    addToFavorites({
      name: currency.name,
      price_usd: currency.price,
      percent_change: currency.percent_change
    });
    this.faved();
  }

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
              onClick={this.handleFaveClick}
              alt=""
            />
          </div>
        )}
        {this.state.expanded && (
          <div className="expanded-graph">
            {/*<LineChart />*/}
          </div>
        )}
      </div>
    );
  }
}

export default LandingCurrency;
