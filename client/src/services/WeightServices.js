import Client from './api'

export const GetWeight = async () => {
  try {
    const res = await Client.get('/weight')
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostWeight = async (data) => {
  try {
    const res = await Client.post('/weight', data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const UpdateWeight = async (id) => {
  try {
    const res = await Client.put(`/weight/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const DeleteWeight = async (id) => {
  try {
    const res = await Client.delete(`/weight/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
