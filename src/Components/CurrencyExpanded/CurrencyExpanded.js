import React, { Component } from 'react'
import './CurrencyExpanded.css'
import Heart from "../../Assets/heart.svg"
import HeartP from "../../Assets/heartpink.svg"
import DataCleaner from "../../Utils/Cleaners/"
import Green from "../../Assets/green.svg"
import LineChart from "../LineChart/LineChart"
import TweetContainer from "../TweetContainer/TweetContainer"

class CurrencyExpanded extends Component {
  constructor(props) {
    super(props)

    // const { currencies, addToFavorites, displayedCurrency, displayExpanded } = this.props

    this.state = {
      faved: false,
      displayedCurrency: this.props.displayedCurrency || "Bitcoin",
      analysis: {},
      expanded: false
    }
    this.cleaner = new DataCleaner()
  }

  async componentDidMount() {
    const { displayedCurrency } = this.props;
    if (displayedCurrency !== this.state.displayedCurrency) {
      this.setState({ displayedCurrency: displayedCurrency})
    }
    const analysis = await this.cleaner.formatAnalysis(displayedCurrency)
    this.setState({
      analysis
    })
  }

  faved = () => {
    this.setState({
      faved: !this.state.faved
    });
  };

  handleFaveClick = async e => {
    const { name } = e.target;
    const fave = await this.cleaner.formatFavorite(name);
    this.props.addToFavorites(fave);
    this.faved();
  };

  showExpanded = (name) => {
    let match
    if (this.props.currencies.length === 0 || this.state.displayedCurrency === "") {
      match = {
        name: "Bitcoin",
        symbol: "BTC",
        price: 3589.62,
        percent_change: 22.4,
        rank: 1
      }
    } else if (this.props.currencies.length !== 0) {
      match = this.props.currencies.find(currency => currency.name === name)
    }
    return match
  }

  render() {
    const { displayedCurrency, faved, analysis } = this.state
    const currency = this.showExpanded(displayedCurrency)
    console.log(currency)
    if (this.props.displayExpanded !== true) {
      return (<div></div>)
    } else {
      return(
        <div className="expanded-container">
          <header>
            <h1 className="currency-symbol-expanded">{currency.symbol}</h1>
            <h1 className="currency-name-expanded">{currency.name}</h1>
          </header>
          <main>
            <div className="price-progress-expanded">
              <img
                  name={currency.name}
                  src={faved ? HeartP : Heart}
                  className="fave-this-expanded"
                  onClick={this.handleFaveClick}
                  alt=""
                />
              <p className="percent-change-expanded">
                {currency.percent_change < 0 ? "-" : "+"}$
                {((currency.percent_change < 0 ? -1 : 1) *
                  Math.round(currency.price * currency.percent_change)) /
                  100}{" "}
                ({currency.percent_change}% {<img className="arrow" src={Green} alt="" />})
              </p>
            </div>
            <LineChart />
            <TweetContainer
              analysis={analysis}
            />
          </main>
        </div>
      )
    }
  }
}

export default CurrencyExpanded
