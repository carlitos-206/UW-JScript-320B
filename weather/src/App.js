import './App.css';
import Current from './Current';
import GetForecast from './GetForecast';
import GetLoc from './GetLoc';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GetLoc />
      <GetForecast />
      {/* <Routes> */}
        {/* <Route path="/current" element={<Current />} /> */}
        {/* <Route path="/two-day" element={} /> */}
        {/* <Route path="/seven-day" element={} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
