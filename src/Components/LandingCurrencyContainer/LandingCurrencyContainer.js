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

  handleClick = (e) => {
    const { name } = e.target
    this.props.setFilter(name)
  }

  render() {
    const { abbrevCurrencies } = this.props;
    const landingCurrencies = abbrevCurrencies.map((currency, i) => {
      return <LandingCurrency 
                key={i} 
                index={i} 
                currency={currency} />;
    });

    return (
      <div className="sort-box">
        <div className="sort">
          <p className="sort-active">Rank</p>
          <p>Price</p>
          <p>%Change</p>
        </div>
        <div className="currency-container">
          <div className="sort">
            {/* change this 'active' class to something more specific */}
            <p className="active">
              <a 
                className="rank-link"
                href="#" 
                name="Rank" 
                onClick={this.handleClick}>
                Rank
              </a>
            </p>
            <p>
              <a 
                className="price-link"
                href="#"
                name="Price"
                onClick={this.handleClick}>
                Price
              </a>
            </p>
            <p>
              <a
                className="percent-change-link"
                href="#"
                name="%Change"
                onClick={this.handleClick}>
                %Change
              </a>
            </p>
          </div>
          {landingCurrencies}
          <div className="bottom-gradient" />
        </div>
      </div>
    );
  }
}

export default LandingCurrencyContainer;
