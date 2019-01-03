import React from 'react'
import { retrieve, send } from './'

describe('API', () => {
  describe('retrieve function', () => {
    it('should call fetch with the correct params', async () => {
      const mockUrl = 'someUrl.com'
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve()
        })
      )
      await retrieve(mockUrl)
      expect(window.fetch).toHaveBeenCalledWith(mockUrl)
    })

    it('should throw an error if fetch call fails', async () => {
      const mockUrl = 'someUrl.com'
      window.fetch = jest.fn().mockImplementation(() => 
        Promise.reject({
          error: 'Fetch has failed'
        })
      )
      expect(retrieve(mockUrl)).rejects.toEqual({error: 'Fetch has failed'})
    })
  })

  describe('send function', () => {
    
  })
    
})