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
    const landingCurrencies = this.props.abbrevCurrencies.map(currency => {
      return <LandingCurrency currency={currency} />;
    });

    return (
      <div className="sort-box">
        <div className="currency-container">
          <div className="sort">
            <p>Rank</p>
            <p>Price</p>
            <p>%Change</p>
          </div>
          {landingCurrencies}
        </div>
      </div>
    );
  }
}

export default LandingCurrencyContainer;
