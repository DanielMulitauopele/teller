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

  handleClick = e => {
    const { name } = e.target;
    this.props.setFilter(name);
  };

  render() {
    const { abbrevCurrencies } = this.props;
    const landingCurrencies = abbrevCurrencies.map((currency, i) => {
      return <LandingCurrency index={i} currency={currency} />;
    });

    return (
      <div className="sort-box">
        <div className="currency-container">
          <div className="sort">
            <a href="#" name="Rank" onClick={this.handleClick}>
              Rank
            </a>
            <a href="#" name="Price" onClick={this.handleClick}>
              Price
            </a>
            <a href="#" name="%Change" onClick={this.handleClick}>
              %Change
            </a>
          </div>
          {landingCurrencies}
          <div className="bottom-gradient" />
        </div>
      </div>
    );
  }
}

export default LandingCurrencyContainer;
