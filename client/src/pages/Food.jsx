import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../globals'
import Search from '../components/Search'

const Food = () => {
  const [food, setFood] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const getFoods = async () => {
      const response = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${API_KEY}${searchQuery}`
      )
      console.log(response.data.results)
      setFood(response.data.results)
    }
    getFoods()
  })

  const handleChange = (e) => {
    e.preventDefault()
    getFoods()
  }

  const onChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <div className="search">
        <Search
          handleChange={handleChange}
          onChange={onChange}
          searchQuery={searchQuery}
        />
      </div>
    </div>
  )
}

export default Food
