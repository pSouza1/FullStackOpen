import React from "react";
import GetWeather from './GetWeather'

const SelectedCountry = (props) => {

  return (
    <div>
      <h1> {props.country.name} </h1>

      <p>Capital: {props.country.capital}</p>
      <p>Population: {props.country.population}</p>

      <h2>Languages: </h2>

      <ul>
        {props.country.languages.map((language) => (
          <li key={language.name}> {language.name}</li>
        ))}
      </ul>

      <img
        src={props.country.flag}
        alt="Flag"
        width="300"
        height="200"
      />

      <GetWeather country = {props.country}/>
      
      </div>
  );
};

export default SelectedCountry;
