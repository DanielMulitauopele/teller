import React from 'react'
import API from './'

describe('API', () => {
  it('should call fetch with the correct params', async () => {
    const mockUrl = 'someUrl.com'
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve()
      })
    )
    await API(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should throw an error if fetch call fails', async () => {
    const mockUrl = 'someUrl.com'
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.reject({
        error: 'Fetch has failed'
      })
    )
    expect(API(mockUrl)).rejects.toEqual({error: 'Fetch has failed'})
  })
})