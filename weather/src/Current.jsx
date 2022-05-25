import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

function Current() {
  const [gridEndpoint, setGridEndpoint] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [forecastArray, setForecastArray] = useState([]);

  useEffect(() => {
// Can use lat/long to get grid endpoint link, which has the forecast data.
// format: https://api.weather.gov/points/{latitude},{longitude}
    fetch(`https://api.weather.gov/points/39.7456,-97.0892`)
      .then(reply => reply.json())
// Per docs grid endpoint is in the "forecast" property
      .then(data => data.properties.forecast)
      .then(link => setGridEndpoint(link))
      .then(
        fetch(`${gridEndpoint}`)
          .then(reply => reply.json())
          .then(data => data.properties.periods)
          .then(array => console.log(array[0]))
      )
  }, [])

  return (
    <div>
      <form>

      </form>
      <div>{gridEndpoint}</div>
    </div>
  )
}

// Current.propTypes = {}

export default Current
