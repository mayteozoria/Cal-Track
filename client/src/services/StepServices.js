import Client from './api'

export const GetSteps = async () => {
  try {
    const res = await Client.get('/steps')
    return res.data
  } catch (error) {
    throw error
  }
}

export const PostSteps = async (data) => {
  try {
    const res = await Client.post('/steps', data)
    return res.data
  } catch (error) {
    throw error
  }
}
export const UpdateSteps = async (id) => {
  try {
    const res = await Client.update(`/steps/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const DeleteSteps = async (id) => {
  try {
    const res = await Client.delete(`/steps/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
