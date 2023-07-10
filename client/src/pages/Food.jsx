import axios from 'axios'
import { useState, useEffect } from 'react'
// import { GetFoods } from '../services/FoodServices'
import { API_KEY } from '../globals'
import Search from '../components/Search'

const Food = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // useEffect(() => {
  const getFoods = async () => {
    const response = await axios.get(
      `https://api.calorieninjas.com/v1/nutrition?query=` + searchQuery,
      { headers: { 'X-Api-Key': `${API_KEY}` } }
    )
    console.log(response)
    setSearchResults(response.data.results)
  }
  // getFoods()
  // }, [])

  const handleChange = (e) => {
    e.preventDefault()
    console.log(searchQuery)
    getFoods()
  }

  const onChange = (e) => {
    setSearchQuery(e.target.value)
  }
  // const onSubmit = (e) => {
  //   e.preventDefault()
  // }

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
