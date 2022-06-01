import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'

function GetLoc() {
  const [coords, setCoords] = useState({
    "lat": 0,
    "lng": 0,
  });
  // const [lat, setLat] = useState('');
  // const [long, setLong] = useState('');

  useEffect(() => {
    const apiKey = ''
    const zipCode = '97232'

    fetch(`https://api.geocod.io/v1.7/geocode?q=${zipCode}&api_key=${apiKey}`)
      .then(reply => reply.json())
      .then(json => json.results[0].location)
      .then(location => setCoords(location))
      // .then(location => setLat(location.lat));
      // fetch(`https://api.geocod.io/v1.7/geocode?q=${zipCode}&api_key=${apiKey}`)
      //   .then(reply => reply.json())
      //   .then(json => json.results[0].location)
      //   .then(location => setLong(location.lng));
}, [])

  return (
    // console.log(`${coords.lat}, ${coords.lng}`)

  )
}

// GetLoc.propTypes = {}

export default GetLoc
