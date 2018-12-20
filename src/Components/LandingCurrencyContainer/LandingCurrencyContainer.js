import React, { Component } from "react";
import "./LandingCurrencyContainer.css";
import LandingCurrency from "../LandingCurrency/LandingCurrency";

class LandingCurrencyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    const landingCurrencies = this.props.currencies.map(currency => {
      return (
        <LandingCurrency currency={currency} />
      )
    })

    return (
      <div className="currency-container">
        {landingCurrencies}
      </div>
    );
  }
}

export default LandingCurrencyContainer;
