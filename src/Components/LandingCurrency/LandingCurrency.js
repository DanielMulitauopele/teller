import React, { Component } from "react";
import "./LandingCurrency.css";
import Heart from "../../Assets/heart.svg";

class LandingCurrency extends Component {
  constructor() {
    super();
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
    return (
      <div className="currency-card" onClick={this.expand}>
        <div className="card-inside-text">
          <div className="cc-left">
            <p>BTC</p>
            <p>$2000.00</p>
          </div>
          <div className="cc-center">
            <p>$150.00</p>
            <p>.0382 coin</p>
          </div>
          <div clasName="cc-right">
            <p> +2.86% </p>
          </div>
        </div>
        {this.state.expanded && (
          <div className="expanded-currency">
            <div className="ec-left">
              <p>Market Cap</p>
              <p>$1000.00</p>
              <p>30%</p>
            </div>
            <div className="ec-right">
              <p>Volume</p>
              <p>$450.00</p>
            </div>
            <img src={Heart} className="fave-this" />
          </div>
        )}
      </div>
    );
  }
}

export default LandingCurrency;
