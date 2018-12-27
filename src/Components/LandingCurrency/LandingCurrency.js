import React, { Component } from "react";
import "./LandingCurrency.css";
import Heart from "../../Assets/heart.svg";
// import Bitcoin from "../../Assets/bitcoin-logo.svg";
// import Bitcoin from "../../../node_modules/cryptocurrency-icons/svg/white/btc.svg";
// import Icons from "../../../node_modules/cryptocurrency-icons/manifest.json";
// import Icons from "../../Assets/cryptoIcons/cryptoIcons.json";
import { Icons } from "../../Assets/cryptoIcons/cryptoIcons";

class LandingCurrency extends Component {
  constructor(props) {
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
    const { symbol, name, price, percent_change, rank } = this.props.currency;
    console.log(Icons[this.props.currency.symbol]);
    return (
      <div className="currency-card" onClick={this.expand}>
        <div className="card-inside-text">
          <div className="cc-left">
            <img src={Icons[this.props.currency.symbol]} />
          </div>
          <div className="cc-center">
            <p>{symbol}</p>
            <p>{name}</p>
          </div>
          <div className="cc-center-right">
            <p>$ {price}</p>
          </div>
          <div className="cc-right">
            <p>{percent_change}</p>
          </div>
        </div>
        {this.state.expanded && (
          <div className="expanded-currency">
            <div className="ec-right">
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
