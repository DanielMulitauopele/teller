import React from 'react'
import { fetchRequest } from './NewsApi'

describe('NewsApi', () => {
  it('should call fetch with the correct params', async () => {
    const mockUrl = 'SomeURL.com'
    window.fetch = jest.fn(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve()
    }))
    await fetchRequest(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should throw an error if fetch fails', async () => {
    const mockUrl = 'SomeURL.com'
    window.fetch = jest.fn(() => Promise.reject({
      error: 'fetch has failed'
    }))
    await expect(fetchRequest(mockUrl)).rejects.toEqual({error: 'fetch has failed'})
  })
})