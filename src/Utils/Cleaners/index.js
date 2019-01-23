import { retrieve, fetchAnalysis } from '../API/'

class DataCleaner {
  constructor() {
    this.fetchData = retrieve
    this.fetchAnalysis = fetchAnalysis
  }

  getCurrencies = async () => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://teller-api.herokuapp.com/api/v1/assets";
    const currencyData = await this.fetchData(url);
    const cleanCurrency = currencyData.map(currency => {
      return {
        symbol: currency.symbol,
        price: Math.round(currency.price_usd * 100) / 100,
        percent_change: Math.round(currency.percent_change_24_hr * 100) / 100,
        name: currency.name,
        rank: currency.rank
      };
    });
    return cleanCurrency;
  };

  formatFavorite = async currencyName => {
    const url =
      "https://cors-anywhere.herokuapp.com/https://teller-api.herokuapp.com/api/v1/assets";
    const currencyData = await this.fetchData(url);
    const faveCurrency = currencyData.find(
      currency => currency.name === currencyName
    );
    return {
      name: faveCurrency.name,
      price: Math.round(faveCurrency.price_usd * 100) / 100,
      percent_change: Math.round(faveCurrency.percent_change_24_hr * 100) / 100
    };
  };

  formatAnalysis = async (currency) => {
    const analysis = await this.fetchAnalysis(currency)
    console.log(analysis)
  //   const toneArray = analysis.document_tone.tones
  //   const sentenceArray = analysis.sentences_tone.filter(sentence => sentence.tones !== [] && sentence.text !== "" && sentence.text.includes(currency)).slice(0, 20)
  //   const tonesDisplay = toneArray.map(tone => {
  //     return {
  //       name: tone.tone_name,
  //       score: Math.round(tone.score * 1000) / 1000
  //     }
  //   })
  //   const sentencesDisplay = sentenceArray.map((sentence, i) => sentence.text)
  //   return {
  //     id: Date.now(),
  //     tones: tonesDisplay,
  //     tweets: sentencesDisplay
  //   }
  }
}

export default DataCleaner;
