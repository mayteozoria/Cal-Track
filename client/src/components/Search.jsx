const Search = (props) => {
  return (
    <div className="search-form">
      <form onSubmit={props.handleChange}>
        <h1>Search in Food Database</h1>
        <input
          type="text"
          name="search"
          value={props.searchQuery}
          placeholder="Search Foods"
          onChange={props.onChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Search
