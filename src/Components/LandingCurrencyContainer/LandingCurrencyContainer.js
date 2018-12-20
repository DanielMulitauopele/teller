import React, { Component } from "react";
import "./LandingCurrencyContainer.css";
import LandingCurrency from "../LandingCurrency/LandingCurrency";

class LandingCurrencyContainer extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div className="currency-container">
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
        <LandingCurrency />
      </div>
    );
  }
}

export default LandingCurrencyContainer;
