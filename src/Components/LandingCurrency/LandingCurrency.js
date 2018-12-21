import React, { Component } from "react";
import "./LandingCurrency.css";
import Heart from "../../Assets/heart.svg";

class LandingCurrency extends Component {
  constructor(props) {
    // console.log(props)
    super(props);
    this.state = {
      expanded: false
    };
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    const { symbol, name, price, percent_change, rank } = this.props.currency
    // console.log(this.props.currency.symbol)
    return (
      <div className="currency-card" onClick={this.expand}>
        <div className="card-inside-text">
          <div className="cc-left">
            {/*insert image here*/}
          </div>
          <div className="cc-center">
            <p>{symbol}</p>
            <p>{price}</p>
          </div>
          <div className="cc-right">
            <p>{percent_change}</p>
          </div>
        </div>
        {this.state.expanded && (
          <div className="expanded-currency">
            <div className="ec-left">
              <p>{name}</p>
              <p>{rank}</p>
            </div>
            <img src={Heart} className="fave-this" />
          </div>
        )}
      </div>
    );
  }
}

export default LandingCurrency;
