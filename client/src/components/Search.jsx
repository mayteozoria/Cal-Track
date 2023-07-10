const Search = (props) => {
  return (
    <div className="search-foods">
      <form onSubmit={props.handleChange}>
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
