import React, { Component } from "react";
import "./LandingCurrency.css";

class LandingCurrency extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false
    };
  }

  render() {
    return (
      <div className="currency-card">
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
    );
  }
}

export default LandingCurrency;
