import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Countries from './pages/Countries';
import CountryInfo from './pages/CountryInfo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="countryInfo/:name" element={<CountryInfo />} />
      </Routes>
    </div>
  );
}

export default App;