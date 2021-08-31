import React, { useState, useEffect } from "react";
import axios from "axios";

const GetWeather = (props) => {
    
    const [dataCountry, setDataCountry] = useState({});

    useEffect(() => {
        console.log('effect getWeather')
        axios
          .get(`http://api.weatherstack.com/current?access_key=
          ${process.env.REACT_APP_API_KEY}&query=${props.country.capital}`)

          .then(response => {
            console.log('promise fulfilled')
            console.log(response.data)
            setDataCountry({
              temperature:response.data.current.temperature,
              wind: response.data.current.wind_speed,
              windDir: response.data.current.wind_dir,
              pictureUrl: response.data.current.weather_icons[0]
            })
          })
      }, [props.country])

  
      console.log(props.country.capital)
      console.log(dataCountry)
      

    return (
        <div>
        <h2>Weather in {props.country.capital}</h2>
        
        <p><b>temperature:</b>{dataCountry.temperature}</p>
  
        <p><img alt="pic" src={dataCountry.pictureUrl}/></p>
  
        <p><b>wind: </b>{dataCountry.wind} mph direction {dataCountry.windDir}</p>
      </div>
    )
}



export default GetWeather;