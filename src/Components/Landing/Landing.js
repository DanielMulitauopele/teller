import React, { Component } from "react";
import "./Landing.css";
import FavoritesContainer from "../FavoritesContainer/FavoritesContainer";
import LandingCurrencyContainer from "../LandingCurrencyContainer/LandingCurrencyContainer";
import NewsContainer from "../../Components/NewsContainer/NewsContainer";
import CurrencyExpanded from "../../Components/CurrencyExpanded/CurrencyExpanded"
import { fetchGraphData, fetchAnalysis } from "../../Utils/API/"

class Landing extends Component {
  constructor(props) {
    super(props);

    const {
      favorites,
      addToFavorites,
      removeFromFavorites,
      currencies,
      setFilter,
      removeLoginState,
      token
    } = this.props;

    this.state = {
      active: false,
      news: [],
      displayedCurrency: "",
      displayExpanded: false,
      graphData: [],
      tones: []
    };
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  expandView = async (name) => {
    const graphData = await fetchGraphData(name)
    this.setAnalysis(name)
    this.setState({
      displayedCurrency: name,
      displayExpanded: !this.state.displayExpanded,
      graphData
    })
  }

  setAnalysis = async (currency) => {
    const analysis = await fetchAnalysis(currency)
    const tones = analysis.document_tones
    this.setState({
      tones
    })
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
      graphData,
      tones
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
          expandView={this.expandView}
          token={token}
          graphData={graphData}
          setAnalysis={this.setAnalysis}
        />
        <CurrencyExpanded
          className="currency-expanded-div"
          currencies={currencies}
          addToFavorites={addToFavorites}
          displayedCurrency={displayedCurrency}
          displayExpanded={displayExpanded}
          graphData={graphData}
          tones={tones}
        />
      </div>
    );
  }
}

export default Landing;
