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
          // .then(json => console.log(json.properties.forecast))
    // Per docs grid endpoint is in the "forecast" property
          .then(data => data.properties.forecast)
          .then(link => setGridEndpoint(link))
          .then(
            fetch(`${gridEndpoint}`)
              .then(reply => reply.json())
              .then(data => setForecastObject(data.properties))
              // .then(obj => setForecastObject(obj.periods[0]))
          )
      }, [])

  return (
    <div>{forecastObject.periods[1].name}</div>
  )
}

// GetForecast.propTypes = {}

export default GetForecast
