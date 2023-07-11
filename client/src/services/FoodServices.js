import Client from './api'

export const GetFoods = async () => {
  try {
    const res = await Client.get('/foods')
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostFoods = async (data) => {
  try {
    const res = await Client.post('/foods', data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const DeleteFoods = async (data) => {
  try {
    const res = await Client.delete('/foods', data)
    return res.data
  } catch (error) {
    throw error
  }
}
