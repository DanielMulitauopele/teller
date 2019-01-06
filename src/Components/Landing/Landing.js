import React, { Component } from "react";
import "./Landing.css";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";
import LandingCurrencyContainer from "../LandingCurrencyContainer/LandingCurrencyContainer";
import NewsContainer from "../../Components/NewsContainer/NewsContainer";
import CurrencyExpanded from "../../Components/CurrencyExpanded/CurrencyExpanded"

class Landing extends Component {
  constructor(props) {
    super(props);

    const { favorites, addToFavorites, removeFromFavorites, abbrevCurrencies, setFilter, removeLoginState, token, } = this.props
    
    this.state = {
      active: false,
      news: [],
      displayedCurrency: "",
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  displayExpanded = (name) => {
    if(!this.state.displayedCurrency) {
      this.setState({
        displayedCurrency: this.props.abbrevCurrencies[0].name
      })
    } else {
      this.setState({
        displayedCurrency: name
      })
    }
  }

  render() {
    const {
      favorites,
      addToFavorites,
      removeFromFavorites,
      abbrevCurrencies,
      setFilter,
      token
    } = this.props;

    return (
      <div className="landing-literal">
        <NewsContainer />
        <FavoritesContainer 
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}/>
        <LandingCurrencyContainer 
          setFilter={setFilter}
          addToFavorites={addToFavorites}
          abbrevCurrencies={abbrevCurrencies}
          displayExpanded={this.displayExpanded}
          token={token}
        />
        {/*<CurrencyExpanded
                  currencies={abbrevCurrencies}
                  addToFavorites={addToFavorites}
                  displayedCurrency={this.state.displayedCurrency} />*/}
      </div>
    );
  }
}

export default Landing;
