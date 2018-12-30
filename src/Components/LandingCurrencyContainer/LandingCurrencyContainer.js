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
    const { abbrevCurrencies } = this.props;
    const landingCurrencies = abbrevCurrencies.map((currency, i) => {
      return <LandingCurrency index={i} currency={currency} />;
    });

    return (
      <div className="sort-box">
        <div className="sort">
          <p className="sort-active">Rank</p>
          <p>Price</p>
          <p>%Change</p>
        </div>
        <div className="currency-container">{landingCurrencies}</div>
        <div className="bottom-gradient" />
      </div>
    );
  }
}

export default LandingCurrencyContainer;
