import './App.css';
import Current from './Current';
import GetForecast from './GetForecast';
import GetLoc from './GetLoc';
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [coords, setCoords] = useState({
    "lat": 0,
    "lng": 0,
  });
  const [zipCode, setZipCode] = useState('');

  return (
    <div className="App">
      <GetLoc 
        zipCode={zipCode}/>
      <GetForecast 
        coords={coords}/>
      {/* <Routes> */}
        {/* <Route path="/current" element={<Current />} /> */}
        {/* <Route path="/two-day" element={} /> */}
        {/* <Route path="/seven-day" element={} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
