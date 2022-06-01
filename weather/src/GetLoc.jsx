import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function GetLoc({ setCoords, setZipCode, zipCode }) {

  useEffect(() => {
    const apiKey = '';
    
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
    <>
      <form 
        onSubmit={setZipCode}
        className="form-floating mt-4 mb-2">
        <input 
          type="text" 
          className="form-control" 
          id="zip" 
          placeholder="11111"
          value={zipCode}
          />
        <label for="zip">Your Zip Code</label>
        <button className="btn btn-primary">Enter</button>
      </form>
    </>
  )
}

GetLoc.propTypes = {
  coords: PropTypes.object.isRequired,
}

export default GetLoc
