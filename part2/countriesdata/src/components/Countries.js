import React from "react";

const Countries = (props) => {

    if(props.filteredCountries.length>10){
        return(
            <p>Too many matches, specify another filter</p>
        )
    }



    if(props.filteredCountries.length===1){         
        return(
        <div>
        <h1> {props.filteredCountries[0].name} </h1>

        <p>Capital: {props.filteredCountries[0].capital}</p>
        <p>Population: {props.filteredCountries[0].population}</p>


        <h2>Languages: </h2>
        
        
         <ul>
         {props.filteredCountries[0].languages.map((language) => (
        <li key={language.name}>
        {" "}
        {language.name}
        </li>
        ))}
         </ul>

         <img src={props.filteredCountries[0].flag} alt="Flag" width="300" height="200"/>

        </div>
        )
    }



  return (
    <ul>
      {props.filteredCountries.map((country) => (
        <li key={country.name}>
          {country.name}
        </li>
      ))}
    </ul>
  );
};

export default Countries;
