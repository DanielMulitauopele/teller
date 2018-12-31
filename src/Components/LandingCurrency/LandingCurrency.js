import React, { Component } from "react";
import "./LandingCurrency.css";
import Heart from "../../Assets/heart.svg";
import { Icons } from "../../Assets/cryptoIcons/cryptoIcons";
import DataCleaner from "../../Utils/Cleaners/"; 

class LandingCurrency extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.cleaner = new DataCleaner()
  }

  expand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  handleClick = async e => {
    const { name } = e.target
    const fave = await this.cleaner.formatFavorite(name)
    this.props.addToFavorites(fave)
  }

  render() {
    const { symbol, name, price, percent_change, rank } = this.props.currency;
    return (
      <div className="currency-card">
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
          <div className="expansion-dots" onClick={this.expand}>
            <div />
            <div />
            <div />
          </div>
        </div>
        {this.state.expanded && (
          <div className="expanded-currency">
            <div className="ec-right">
              <p>{name}</p>
              <p>{rank}</p>
            </div>
            <img
              name={name} 
              src={Heart} 
              className="fave-this"
              onClick={this.handleClick} />
          </div>
        )}
      </div>
    );
  }
}

export default LandingCurrency;
