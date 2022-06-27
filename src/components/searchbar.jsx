import React from "react";

const Searchbar=({onChangeRegion,onChangeSearch,searchValue,filterValue})=>{
return(
  <div>
 
<div className="Searchbar">


<input type='text' placeholder="Search for a country..." value={searchValue}onChange={onChangeSearch} /> 

<h4 className="filtertext">Filter by region</h4>
<select id="Region" name="Region" onChange={onChangeRegion} value={filterValue}>
  <option value={null} defaultValue></option>
  <option value="Africa">Africa</option>
  <option value="America">America</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
 
</select>

</div>
</div>
)
}

export default Searchbar;