import { retrieve } from '../API/'

class DataCleaner {
  constructor() {
    this.fetchData = retrieve
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
}

export default DataCleaner;
