import * as API from '../API/'

class DataCleaner {
  constructor() {
    this.fetchData = API.fetchData
  }

  getCurrencies = async () => {
    const currencyData = await this.fetchData()
    console.log(currencyData)
    return currencyData
  }
}

export default DataCleaner