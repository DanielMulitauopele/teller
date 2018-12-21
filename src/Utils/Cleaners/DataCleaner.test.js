import React from 'react'
import DataCleaner from './'
import API from '../API/'
import { mockUsers } from '../MockData/mockUsers'
import { mockCurrencies } from '../MockData/mockCurrencies'
import { mockAbbrevCurrencies } from '../MockData/mockAbbrevCurrencies'
import { mockExpandedCurrencies } from '../MockData/mockExpandedCurrencies'

describe('DataCleaner', () => {
  const mockCleaner = new DataCleaner()

  mockCleaner.fetchData = jest.fn(() => {
    return mockCurrencies
  })

  describe('getAbbrevCurrencies function', () => {
    it('should call fetchData with the correct params', async () => {
      await mockCleaner.getAbbrevCurrencies()
      expect(mockCleaner.fetchData).toHaveBeenCalled()
    })

    it('should return an array of abbreviated clean objects', async () => {
      const cleanedCurrencies = await mockCleaner.getAbbrevCurrencies()
      expect(cleanedCurrencies).toEqual(mockAbbrevCurrencies)
    })
  })

  describe('getExpandedCurrencies function', () => {
    it('should call fetchData with the correct params', async () => {
      await mockCleaner.getExpandedCurrencies()
      expect(mockCleaner.fetchData).toHaveBeenCalled()
    })

    it('should return an array of expanded clean objects', async () => {
      const cleanedCurrencies = await mockCleaner.getExpandedCurrencies()
      expect(cleanedCurrencies).toEqual(mockExpandedCurrencies)
    })
  })

})