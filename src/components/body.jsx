
import React from "react";
import Searchbar from "./searchbar";
import useCountries from "./useCountries";

const Body=()=>{

const [renderCountries,dataReady,searchValue,filterValue,setSearchValue,setFilterValue]=useCountries();

const onChangeRegion=(e)=>{
setFilterValue(e.target.value)
}
const onChangeSearch=(e)=>{
    setSearchValue(e.target.value)
        }



return(
    <div className="body">
<Searchbar
searchValue={searchValue}
filterValue={filterValue}
    onChangeRegion={onChangeRegion}
    onChangeSearch={onChangeSearch}
/>

{dataReady?renderCountries():<h2> Countries Loading ...</h2>}
</div>
)
}

export default Body;