import React, { useEffect, useState } from 'react'

const Search = () => {

  const [searchText,setSearchText] = useState("");

  const handleChange = (e) => {

    setSearchText(e.target.value);
    alert(searchText);

  }

  useEffect(()=>{

    

  })

  return (
    <div style={{ textAlign:"center" }}>
      
        <input type="text" placeholder='Search Conutry' value={searchText} onChange={handleChange}/>

    </div>
  )
}

export default Search
