
import React,{useState,useEffect} from "react";
import Searchbar from "./searchbar";
import RenderCountries from "./RenderCountries";

const Body=()=>{

    const [searchValue,setSearchValue]=useState('')
    const [filterValue,setFilterValue]=useState('')
    const[countryData,setCountryData]=useState([])
    const[dataReady,isDataReady]=useState(false)
useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>{

    setCountryData(data)
isDataReady(true)
    }
    )
       },[])

const onChangeRegion=(e)=>{
setFilterValue(e.target.value==='All regions'?'':e.target.value)
}
const onChangeSearch=(e)=>{
    setSearchValue(e.target.value)
        }
const countryInfo=(e)=>{
console.log(e.target);

}


return(
    <div className="body">
<Searchbar
 searchValue={searchValue}
 filterValue={filterValue}
 onChangeRegion={onChangeRegion}
 onChangeSearch={onChangeSearch}
/>
{dataReady?
<RenderCountries countryData={countryData} filterValue={filterValue} newPage={countryInfo} searchValue={searchValue}/>:<div><h2>Countries Loading ...</h2></div>}

</div>
)
}


export default Body;