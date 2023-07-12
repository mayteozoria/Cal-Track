import axios from 'axios'
import { useState } from 'react'
import { API_KEY } from '../globals'
import Search from '../components/Search'
import FoodResults from '../components/FoodResults'

const Food = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const getFoods = async () => {
    const response = await axios.get(
      `https://api.calorieninjas.com/v1/nutrition?query=` + searchQuery,
      { headers: { 'X-Api-Key': `${API_KEY}` } }
    )
    console.log(response)
    setSearchResults(response.data.items)
  }

  const handleChange = (e) => {
    e.preventDefault()
    console.log(searchQuery)
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
      <hr></hr>
      <div>
        <FoodResults searchResults={searchResults} />
      </div>
    </div>
  )
}

export default Food
