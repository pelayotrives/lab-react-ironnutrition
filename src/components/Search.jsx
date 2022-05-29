import React, { useState } from 'react'

function Search(props) {

  const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
    // console.log("Has buscado el valor", event.target.value);
    props.searchList(event.target.value)
  }

  return (
    <div>
    <label htmlFor="search">Search a food:</label><br /><br />
    <input className="input" name="search" type="text" onChange={handleSearch} value={search}/>
    </div>
  )
}

export default Search