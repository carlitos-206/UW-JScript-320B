// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import GetForecast from './GetForecast';
import forecastArray from './GetForecast';

function Current() {
  
  

  return (
    <div>
      <div>{forecastArray.periods[1].number}</div>
      {/* <Link to="/two-day"></Link> <Link to="seven-day"></Link> */}
    </div>
  )
}

// Current.propTypes = {}

export default Current
