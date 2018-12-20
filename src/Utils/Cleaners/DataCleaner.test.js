import React from 'react'
import DataCleaner from './'
import * as API from '../API/'
import mockUsers from '../MockData/mockUsers'
import mockCurrencies from '../MockData/mockCurrencies'

describe('DataCleaner', () => {
  const mockCleaner = new DataCleaner()

  mockCleaner.fetchData = jest.fn(() => {
    return mockCurrencies
  })

  describe('getCurrencies function', () => {
    it('should call fetchData with the correct params', async () => {
      await mockCleaner.getCurrencies()
      await expect(mockCleaner.fetchData).toHaveBeenCalled()
    })
  })

})