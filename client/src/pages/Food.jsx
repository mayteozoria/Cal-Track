import { useState, useEffect } from 'react'
import { GetFoods } from '../services/FoodServices'
import { BASE_URL, API_KEY } from '../globals'
import Search from '../components/Search'

const Food = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const getFoods = async () => {
      const response = await axios.get(
        `https://api.calorieninjas.com/v1/nutrition?query=${API_KEY}${searchQuery}`
      )
      console.log(response.data.results)
      setSearchResults(response.data.results)
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
