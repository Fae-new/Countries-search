import React,{useState,useEffect} from "react"



const useCountries=()=>{
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

const renderCountries=()=>{
return(
<div className="countryRenderdiv">
{ countryData.filter(country=>country.region.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
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
})}
</div>
)

}

return [renderCountries,dataReady,searchValue,filterValue,setSearchValue,setFilterValue]


}

export default useCountries;

