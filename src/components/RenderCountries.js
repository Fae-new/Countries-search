import React from "react"
import { Link } from "react-router-dom"


const RenderCountries=({countryData,filterValue,searchValue,newPage})=>{
return(
<div className="countryRenderdiv" >
{ countryData.filter(country=>country.region.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
.filter(country=>country.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
.map((country,index)=>{
return(

    <div className="countryCard" key={index} id={index} onClick={newPage}>
    <img src={country.flag} alt='Country flag'/>
    <h3>{country.name}</h3>
    <p><strong>Population: </strong>{country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> { country.region}</p>
    <p><strong>Capital:</strong> {country.capital}</p>

    <Link to={`/countries/${country.name}`}>details</Link>
        </div>
     
)
})}

</div>
)

}



export default RenderCountries;

