import React, { useState } from "react";
import SelectedCountry from "./SelectedCountry";

const Countries = (props) => {
  const [selectedIndex, setSelectedIndex] = useState("");

  const handleClick = (index) => {
    console.log(index);
    setSelectedIndex(index);
  };


  if (props.filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (props.filteredCountries.length === 1 || selectedIndex !== "") {
    if (props.filteredCountries.length === 1) {
      return (
        <div>
          <SelectedCountry country={props.filteredCountries[0]} />
        </div>
      );
    }

    return (
      <div>
        <SelectedCountry country={props.filteredCountries[selectedIndex]} />
      </div>
    );
  }


  return (
    <ul>
      {props.filteredCountries.map((country, index) => (
        <li key={country.name}>  {country.name} 
          <button
            onClick={() => {
              handleClick(index);
            }}
          >
            {" "}
            show{" "}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Countries;
