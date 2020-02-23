import React from 'react';
import './App.css';

import cars from "./cars.json";

import FilterableCarList from './FilterableCarList';


function App() {
  return (
      <div className="App">
        <h1>SAS Web UI Developer Project</h1>
        <p>There are {cars.length} cars in the data.</p>


        <FilterableCarList cars={cars} />
      </div>
  );
}

export default App;
