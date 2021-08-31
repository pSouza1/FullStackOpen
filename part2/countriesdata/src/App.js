import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from './components/Countries'


  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')


  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setNewSearch(event.target.value);
  };


  let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(newSearch.toLowerCase()))

  
  return (
    <div>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />

      <Countries filteredCountries={filteredCountries}/>
    </div>
    
    
  );
};

export default App;