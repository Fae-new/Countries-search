import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const CountryDetails=()=>{
const [countrydetails,setCountryDetails]=useState([])
const[Ready,isReady]=useState(false)
    const{countryName}=useParams()


    useEffect(()=>{

fetch(`https://restcountries.com/v2/name/${countryName}`)
.then(res=>res.json())
.then(data=>{
    if(data){  setCountryDetails(data)}
  
isReady(true)})
    },[countryName])


    return(
<div>
<Link to='/'><h3  style={{marginLeft:'85%'}}>Home</h3></Link>
{Ready&&
<div className="detailsCard">
<img src={countrydetails[0].flag}  alt='flag'/>
<div>
    <h1  style={{marginLeft:'40px'}}> {countryName}</h1>
<div className="infoDiv"> 

<div>
<p><strong>Native Name: </strong> {countrydetails[0].nativeName}</p>
<p><strong>Population: </strong> {countrydetails[0].population.toLocaleString()}</p>
<p><strong>Region: </strong> {countrydetails[0].region}</p>
<p><strong>Sub Region: </strong> {countrydetails[0].subregion}</p>
<p><strong>Capital: </strong> {countrydetails[0].capital}</p>
</div>

<div>
<p><strong>Top Level Domain: </strong> {countrydetails[0].topLevelDomain[0]}</p>
<p><strong>Calling Code: </strong> {countrydetails[0].callingCodes}</p>
<p><strong>Currencies: </strong> {countrydetails[0].currencies[0].name}</p>
<p><strong>Language(s): </strong>{countrydetails[0].languages.map((language,index)=>{
     if(index+1===countrydetails[0].languages.length){
         return(`${language.name}`)
     }else{
         return(`${language.name}, `)}
 })}</p>
 </div>

</div>

      </div>

      </div>}

</div>
    )
}

export default CountryDetails;