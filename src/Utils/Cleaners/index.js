import API from '../API/'

class DataCleaner {
  constructor() {
    this.fetchData = API
  }

  getAbbrevCurrencies = async () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://guarded-reef-25579.herokuapp.com/api/v1/assets'
    const currencyData = await this.fetchData(url)
    const cleanCurrency = currencyData.map(currency => {
      return {
        symbol: currency.symbol,
        price: Math.round(currency.price_usd * 100)/100,
        percent_change: Math.round(currency.percent_change_24_hr * 100)/100,
        name: currency.name,
        rank: currency.rank
      }
    })
    return cleanCurrency
  }

  getExpandedCurrencies = async () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://guarded-reef-25579.herokuapp.com/api/v1/assets'
    const currencyData = await this.fetchData(url)
    const cleanCurrency = currencyData.map(currency => {
      return {
        symbol: currency.symbol,
        price: Math.round(currency.price_usd * 100)/100,
        percent_change: Math.round(currency.percent_change_24_hr * 100)/100,
        name: currency.name,
        rank: currency.rank,
        supply: Math.round(currency.supply * 100)/100,
        market_cap: Math.round(currency.market_cap_usd * 100)/100
      }
    })
    return cleanCurrency
  }

  getCoinNames = async () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://guarded-reef-25579.herokuapp.com/api/v1/assets'
    const currencyData = await this.fetchData(url)
    const cleanCurrency = currencyData.map(currency => currency.name)
    return cleanCurrency
  }

  formatFavorite = async (currencyName) => {
    const url = 'https://cors-anywhere.herokuapp.com/https://guarded-reef-25579.herokuapp.com/api/v1/assets'
    const currencyData = await this.fetchData(url)
    const faveCurrency = currencyData.find(currency => currency.name === currencyName)
    console.log(faveCurrency)
    return {
      name: faveCurrency.name,
      price: Math.round(faveCurrency.price_usd * 100)/100,
      percent_change: Math.round(faveCurrency.percent_change_24_hr * 100)/100
    }
  }
}

export default DataCleaner