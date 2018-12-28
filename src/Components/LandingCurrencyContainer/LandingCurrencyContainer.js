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
        <div className="currency-container">
          <div className="sort">
            {/* change this 'active' class to something more specific */}
            <p className="active">Rank</p>
            <p>Price</p>
            <p>%Change</p>
          </div>
          {landingCurrencies}
          <div className="bottom-gradient" />
        </div>
      </div>
    );
  }
}

export default LandingCurrencyContainer;
