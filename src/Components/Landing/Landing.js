import React, { Component } from "react";
import "./Landing.css";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";
import LandingCurrencyContainer from "../LandingCurrencyContainer/LandingCurrencyContainer";
import NewsContainer from "../../Components/NewsContainer/NewsContainer";
import CurrencyExpanded from "../../Components/CurrencyExpanded/CurrencyExpanded"
import { fetchGraphData } from "../../Utils/API/"

class Landing extends Component {
  constructor(props) {
    super(props);

    // const { favorites, addToFavorites, removeFromFavorites, currencies, setFilter, removeLoginState, token, setFavorites } = this.props

    this.state = {
      active: false,
      news: [],
      displayedCurrency: "",
      displayExpanded: false,
      graphData: []
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  displayExpanded = async (name) => {
    const graphData = await fetchGraphData(name)
    this.setState({
      displayedCurrency: name,
      displayExpanded: !this.state.displayExpanded,
      graphData
    })
    console.log(graphData)
  }

  render() {
    const {
      favorites,
      addToFavorites,
      removeFromFavorites,
      currencies,
      setFilter,
      token,
      setFavorites
    } = this.props;

    const {
      displayedCurrency,
      displayExpanded,
      graphData
    } = this.state;

    return (
      <div className="landing-literal">
        <NewsContainer />
        <FavoritesContainer
          favorites={favorites}
          removeFromFavorites={removeFromFavorites}
          setFavorites={setFavorites}
        />
        <LandingCurrencyContainer
          setFilter={setFilter}
          addToFavorites={addToFavorites}
          currencies={currencies}
          displayExpanded={this.displayExpanded}
          token={token}
        />
        <CurrencyExpanded
          currencies={currencies}
          addToFavorites={addToFavorites}
          displayedCurrency={displayedCurrency}
          displayExpanded={displayExpanded}
          graphData={graphData}
        />
      </div>
    );
  }
}

export default Landing;
