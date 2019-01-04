import React, { Component } from 'react'
import './CurrencyExpanded.css'
import Heart from "../../Assets/heart.svg" 
import HeartP from "../../Assets/heartpink.svg"
import DataCleaner from "../../Utils/Cleaners/"
import Green from "../../Assets/green.svg" 

class CurrencyExpanded extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faved: false,
      displayedCurrency: this.props.displayedCurrency
    }
    this.cleaner = new DataCleaner()
  }

  componentDidUpdate() {
    const { displayedCurrency } = this.props;
    if (displayedCurrency !== this.state.displayedCurrency) {
      this.setState({ displayedCurrency: displayedCurrency})
    } 
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

  // matchCurrency = async () => {
  //   const { displayedCurrency } = this.state
  //   const { currencies } = this.props
  //   const newCurrency = currencies.find(currency => currency.name === displayedCurrency)
  //   // debugger
  //   return await newCurrency
  // }

  render() {
    // const currency = this.matchCurrency()
    // const { symbol, name, percent_change, price } = this.matchCurrency()
    // console.log(currency)
    return(
      <div>
      <h1>hi</h1>
        {/*<header>
                  <h1>{symbol}</h1>
                  <h3>{name}</h3>
                  <img
                      name={name}
                      src={this.state.faved ? HeartP : Heart}
                      className="fave-this"
                      onClick={this.handleFaveClick}
                      alt=""
                    />
                </header>
                <main>
                  <section>
                    <div className="price-progress">
                      <p>
                        {percent_change < 0 ? "-" : "+"}$
                        {((percent_change < 0 ? -1 : 1) *
                          Math.round(price * percent_change)) /
                          100}{" "}
                        ({percent_change}% <img className="arrow" src={Green} alt="" />)
                      </p>
                    </div>
                  </section>
                </main>*/}
      </div>
    )
  }
}

export default CurrencyExpanded
