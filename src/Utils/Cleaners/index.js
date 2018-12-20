import * as API from '../API/'

class DataCleaner {
  constructor() {
    this.fetchData = API.fetchData
  }

  getCurrencies = async () => {
    const url = 'https://guarded-reef-25579.herokuapp.com/api/v1/assets'
    const currencyData = await this.fetchData(url)
    console.log(currencyData)
    return currencyData
  }
}

export default DataCleaner