import React from 'react'
import DataCleaner from './'
import * as API from '../API/'
import mockUsers from '../MockData/mockUsers'
import mockCurrencies from '../MockData/mockCurrencies'

describe('DataCleaner', () => {
  const mockCleaner = new DataCleaner()

  describe('getCurrencies function', () => {
    xit('should call fetchData with the correct params', async () => {
      await mockCleaner.getCurrencies()
      expect(mockCleaner.fetchData).toHaveBeenCalled()
    })
  })

})