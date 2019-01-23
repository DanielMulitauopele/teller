import React, { Component } from 'react'
import './CurrencyExpanded.css'
import Heart from "../../Assets/heart.svg"
import HeartP from "../../Assets/heartpink.svg"
import Green from "../../Assets/green.svg"
import LineChart from "../LineChart/LineChart"
import Analysis from "../Analysis/Analysis"

class CurrencyExpanded extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faved: false,
      displayedCurrency: "",
      analysis: {},
      expanded: false
    }
  }

  async componentDidMount(){
    this.setState({
      displayedCurrency: this.props.displayedCurrency
    })
  }

  faved = () => {
    this.setState({
      faved: !this.state.faved
    });
  };

  handleFaveClick = async e => {
    const { name } = e.target;
    const { currencies } = this.props
    const faveCurrency = currencies.find(currency => currency.name === name)
    const newFave = {
      name: faveCurrency.name,
      price: Math.round(faveCurrency.price_usd * 100) / 100,
      percent_change: Math.round(faveCurrency.percent_change_24_hr * 100) / 100
    }
    this.props.addToFavorites(newFave);
    this.faved();
  };

  showExpanded = (name) => {
    const match = this.props.currencies.find(currency => currency.name === name)
    return match
  }

  render() {
    const { faved } = this.state
    const { displayedCurrency, displayExpanded, graphData, tones } = this.props
    const currency = this.showExpanded(displayedCurrency)
    if (displayExpanded !== true) {
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
                ({currency.percent_change}% {<img className={currency.percent_change > 0 ? "arrow" : "arrow-down"} src={Green} alt="" />})
              </p>
            </div>
            <LineChart graphData={graphData}/>
            <Analysis tones={tones} currency={currency.name}/>
          </main>
        </div>
      )
    }
  }
}

export default CurrencyExpanded
