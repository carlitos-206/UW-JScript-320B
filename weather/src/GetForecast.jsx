import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

function GetForecast() {
  // const [lat, setLat] = useState('');
  // const [long, setLong] = useState('');
  // const [gridEndpoint, setGridEndpoint] = useState('');
  const [forecastArray, setForecastArray] = useState([]);

  useEffect(() => {
    // Can use lat/long to get grid endpoint link, which has the forecast data.
    // format: https://api.weather.gov/points/{latitude},{longitude}
        fetch(`https://api.weather.gov/points/45.5312,-122.6447`)
          // .then(reply => console.log(reply))
          .then(reply => reply.json())
          .then(json => json.properties.forecast)
          .then(link => fetch(link))
          .then(reply => reply.json())
          .then(json => json.properties.periods)
          .then(array => setForecastArray(array))
  
              //     .then(data => console.log(data))
          //     // .then(obj => setForecastObject(obj.periods[0]))
      }, [])

  // return (
  //   // console.log(forecastObject.properties.periods)
  //   // <div>
  //   //   {forecastArray.map((period, index) => (
  //   //     <div key={index}>{period.name}
  //   //     </div>
  //   //   ))}
  //   // </div>
  // )
}

// GetForecast.propTypes = {}

export default GetForecast
