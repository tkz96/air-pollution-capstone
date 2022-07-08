import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './Pages/Countries';
import CountryInfo from './Pages/CountryInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="countryInfo/:countryName/:lat/:lon" element={<CountryInfo />} />
      </Routes>
    </div>
  );
}

export default App;
