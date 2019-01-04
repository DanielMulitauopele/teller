import React, { Component } from "react";
import "./LandingCurrencyContainer.css";
import LandingCurrency from "../LandingCurrency/LandingCurrency";

class LandingCurrencyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  handleClick = e => {
    const { name } = e.target;
    this.props.setFilter(name);
  };

  render() {
    const { abbrevCurrencies, addToFavorites, displayExpanded, token } = this.props;

    const landingCurrencies = abbrevCurrencies.map((currency, i) => {
      return (
        <LandingCurrency
          key={i}
          index={i}
          currency={currency}
          addToFavorites={addToFavorites}
          displayExpanded={displayExpanded}
          token={token}
        />
      );
    });

    return (
      <div className="sort-box">
        <div className="currency-container">
          <div className="sort">
            <button
              className="rank-link"
              name="Rank"
              onClick={this.handleClick}
            >
              Rank
            </button>
            <button
              className="price-link"
              name="Price"
              onClick={this.handleClick}
            >
              Price
            </button>
            <button
              className="percent-change-link"
              name="%Change"
              onClick={this.handleClick}
            >
              %Change
            </button>
          </div>
          {landingCurrencies}
        </div>
      </div>
    );
  }
}

export default LandingCurrencyContainer;
