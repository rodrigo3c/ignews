import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Rodrigo' },
    { id: 2, name: 'Guilherme' },
    { id: 3, name: 'Diego' },
  ]

  return response.json(users)
}