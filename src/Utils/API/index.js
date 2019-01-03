export const retrieve = async (url) => {
  const response = await fetch(url)
  if (response.status >= 300) {
    throw new Error('Fetch has failed')
  } else {
    const result = await response.json()
    return result
  }
}

export const send = async (user) => {
  const url = 'https://guarded-reef-25579.herokuapp.com/users'
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }, 
    method: 'POST',
    body: user
  }) 
  const clone = await response.clone()
  const result = await clone.json()
  console.log(result)
  console.log(result.teller_api_token)
  return result
}

