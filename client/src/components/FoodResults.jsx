const FoodResults = (props) => {
  return (
    <div className="search-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Calories</th>
            <th>Serving Size</th>
            <th>Protein</th>
            <th>Carbohydrates</th>
            <th>Fiber</th>
            <th>Fat</th>
            <th>Sugar</th>
            <th>Sodium</th>
          </tr>
        </thead>
        <tbody>
          {props.searchResults.map((item) => (
            <tr key={item.id}>
              <td>{item.name}g</td>
              <td>{item.calories}g</td>
              <td>{item.serving_size_g}g</td>
              <td>{item.protein_g}g</td>
              <td>{item.carbohydrates_total_g}g</td>
              <td>{item.fiber_g}g</td>
              <td>{item.fat_total_g}g</td>
              <td>{item.sugar_g}g</td>
              <td>{item.sodium_mg}mg</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default FoodResults
