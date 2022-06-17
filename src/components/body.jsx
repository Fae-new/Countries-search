
import React,{useState,useEffect} from "react";
import Searchbar from "./searchbar";


const Body=()=>{
    const [searchValue,setSearchValue]=useState('')
    const [filterValue,setFilterValue]=useState('')
    const[countryData,setCountryData]=useState([])
    const[dataReady,isDataReady]=useState(false)



    const onChangeRegion=(e)=>{
setFilterValue(e.target.value)
}


const onChangeSearch=(e)=>{
    setSearchValue(e.target.value)
        }

      
   
useEffect(()=>{
            fetch('https://restcountries.com/v2/all')
            .then(response=>response.json())
            .then(data=>{

                setCountryData(data)

    isDataReady(true)
            }
            )
               })




const renderCountries=()=>{

return(
    countryData.filter(country=>country.region.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
    .filter(country=>country.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    .map((country,index)=>{
        return(
    
            <div className="countryCard" key={index}>
            <img src={country.flag} alt='Country flag'/>
            <h3>{country.name}</h3>
            <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
            <p><strong>Region:</strong> { country.region}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
                </div>
             
        )
    })
)

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