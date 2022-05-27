import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

function GetForecast() {
  // const [lat, setLat] = useState('');
  // const [long, setLong] = useState('');
  const [gridEndpoint, setGridEndpoint] = useState('');
  const [forecastObject, setForecastObject] = useState({});

  useEffect(() => {
    // Can use lat/long to get grid endpoint link, which has the forecast data.
    // format: https://api.weather.gov/points/{latitude},{longitude}
        fetch(`https://api.weather.gov/points/45.5312,-122.6447`)
          .then(reply => reply.json())
          .then(json => json.properties.forecast)
    // Per docs grid endpoint is in the "forecast" property
          // .then(data => console.log(data.properties.forecast))
          .then(link => setGridEndpoint(link))
          .then(
            fetch(`${gridEndpoint}`)
              .then(reply => reply.json())
              .then(obj => setForecastObject(obj))
          //     .then(data => console.log(data))
          //     // .then(obj => setForecastObject(obj.periods[0]))
          )
      }, [])

  return (
    // console.log(forecastObject.properties.periods)
    <div>
      {forecastObject.map((period, index) => (
        <div key={index}>{forecastObject.properties.periods[0].name}
        </div>
      ))}
    </div>
  )
}

// GetForecast.propTypes = {}

export default GetForecast
