import React, { Component } from "react";
import "./LandingCurrencyContainer.css";
import LandingCurrency from "../LandingCurrency/LandingCurrency";

class LandingCurrencyContainer extends Component {
  constructor({ props, abbrevCurrencies, setFilter, addToFavorites }) {
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
    const { abbrevCurrencies, addToFavorites } = this.props;
    const landingCurrencies = abbrevCurrencies.map((currency, i) => {
      return (
        <LandingCurrency
          key={i}
          index={i}
          currency={currency}
          addToFavorites={addToFavorites}
        />
      );
    });

    return (
      <div className="sort-box">
        <div className="currency-container">
          <div className="sort">
            <a
              className="rank-link"
              href="#"
              name="Rank"
              onClick={this.handleClick}
            >
              Rank
            </a>
            <a
              className="price-link"
              href="#"
              name="Price"
              onClick={this.handleClick}
            >
              Price
            </a>
            <a
              className="percent-change-link"
              href="#"
              name="%Change"
              onClick={this.handleClick}
            >
              %Change
            </a>
          </div>
          {landingCurrencies}
        </div>
      </div>
    );
  }
}

export default LandingCurrencyContainer;
