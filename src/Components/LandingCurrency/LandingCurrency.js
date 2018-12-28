import React, { Component } from "react";
import "./LandingCurrency.css";
import Heart from "../../Assets/heart.svg";
import { Icons } from "../../Assets/cryptoIcons/cryptoIcons";

class LandingCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const { symbol, name, price, percent_change, rank } = this.props.currency;
    let style;
    const randomGradientSelector = Math.floor(Math.random() * 5);

    switch (randomGradientSelector) {
      case 1:
        style = {
          background: "linear-gradient(to bottom, #fd746c, #ff9068)"
        };
        break;
      case 2:
        style = {
          background: "linear-gradient(to bottom, #c2e59c, #64b3f4)"
        };
        break;
      case 3:
        style = {
          background: "linear-gradient(to bottom, #b24592, #f15f79"
        };
        break;
      case 4:
        style = {
          background: "linear-gradient(to bottom, #00c6ff, #0072ff)"
        };
        break;
      case 5:
        style = {
          background: "linear-gradient(to bottom, #4ca1af, #c4e0e5)"
        };
        break;
      default:
        style = { background: "linear-gradient(to bottom, #b24592, #f15f79" };
        break;
    }

    return (
      <div className="currency-card" onClick={this.expand}>
        <div className="card-inside-text">
          <div className="cc-left">
            <img style={style} src={Icons[this.props.currency.symbol]} />
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
        </div>
        {this.state.expanded && (
          <div className="expanded-currency">
            <div className="ec-right">
              <p>{name}</p>
              <p>{rank}</p>
            </div>
            <img src={Heart} className="fave-this" />
          </div>
        )}
      </div>
    );
  }
}

export default LandingCurrency;
