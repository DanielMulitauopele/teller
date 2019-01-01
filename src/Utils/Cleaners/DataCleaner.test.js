import React from 'react'
import DataCleaner from './'
import API from '../API/'
import { mockUsers } from '../MockData/mockUsers'
import { mockCurrencies } from '../MockData/mockCurrencies'
import { mockAbbrevCurrencies } from '../MockData/mockAbbrevCurrencies'
import { mockExpandedCurrencies } from '../MockData/mockExpandedCurrencies'
import { mockCoinNames } from '../MockData/mockCoinNames'

describe('DataCleaner', () => {
  const mockCleaner = new DataCleaner()

  mockCleaner.fetchData = jest.fn(() => {
    return mockCurrencies
  })

  describe('getAbbrevCurrencies function', () => {
    it('should call fetchData', async () => {
      await mockCleaner.getAbbrevCurrencies()
      expect(mockCleaner.fetchData).toHaveBeenCalled()
    })

    it('should return an array of abbreviated clean objects', async () => {
      const cleanedCurrencies = await mockCleaner.getAbbrevCurrencies()
      expect(cleanedCurrencies).toEqual(mockAbbrevCurrencies)
    })
  })

  describe('getExpandedCurrencies function', () => {
    it('should call fetchData', async () => {
      await mockCleaner.getExpandedCurrencies()
      expect(mockCleaner.fetchData).toHaveBeenCalled()
    })

    it('should return an array of expanded clean objects', async () => {
      const cleanedCurrencies = await mockCleaner.getExpandedCurrencies()
      expect(cleanedCurrencies).toEqual(mockExpandedCurrencies)
    })
  })

  describe('getCoinNames function', () => {
    it('should call fetchData', async () => {
      await mockCleaner.getCoinNames()
      expect(mockCleaner.fetchData).toHaveBeenCalled()
    })

    it('should return an array of coin names', async () => {
      const coinNames = await mockCleaner.getCoinNames()
      expect(coinNames).toEqual(mockCoinNames)
    })
  })

  describe('formatFavorite function', () => {
    it('should call fetchData', async () => {
      await mockCleaner.formatFavorite("Bitcoin")
      expect(mockCleaner.fetchData).toHaveBeenCalled()
    })

    it('should return an object with the correct key value pairs', async () => {
      const expected = {
        name: "Bitcoin",
        price: 3586.16,
        percent_change: 0.83
      }
      const newFave = await mockCleaner.formatFavorite("Bitcoin")
      expect(newFave).toEqual(expected)
    })
  })

})