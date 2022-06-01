import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

function GetForecast({ coords }) {
  const [forecastArray, setForecastArray] = useState([]);

  useEffect(() => {
    // Can use lat/long to get grid endpoint link, which has the forecast data.
    // format: https://api.weather.gov/points/{latitude},{longitude}
    fetch(`https://api.weather.gov/points/${coords.lat},${coords.lng}`)
      // .then(reply => console.log(reply))
      .then(reply => reply.json())
      .then(json => json.properties.forecast)
      .then(link => fetch(link))
      .then(reply => reply.json())
      .then(json => json.properties.periods)
      .then(array => setForecastArray(array))
  }, [])

  return (
    <div>
      {forecastArray.map((period, index) => (
        <div key={index}>{period.name}
        </div>
      ))}
    </div>
  )
}

// GetForecast.propTypes = {}

export default GetForecast
