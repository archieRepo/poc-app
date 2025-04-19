import React from 'react'

function Search(props) {
  const {searchValue, setSearchValue} = props;
  const handleChange = (searchText) => {
    setSearchValue(searchText)
  }
    return (
      <input data-testid="filterInput" className="large" placeholder="Enter Country Name" value={searchValue} onChange={(e) => handleChange(e.target.value)}  />
  	);
}

export default Search;
