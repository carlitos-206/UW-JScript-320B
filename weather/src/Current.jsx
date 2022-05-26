import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

function Current() {
  
  

  return (
    <div>
      <div>{forecastObject.periods[0].name}</div>
      {/* <Link to="/two-day"></Link> <Link to="seven-day"></Link> */}
    </div>
  )
}

// Current.propTypes = {}

export default Current
