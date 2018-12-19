import React from 'react'
import * as API from './'

describe('API', () => {
  it('should call fetch with the correct params', async () => {
    const mockUrl = 'someUrl.com'
    window.fetch = jest.fn().mockImplementation(() => 
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve()
      })
    )
    await API.fetchData(mockUrl)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
})