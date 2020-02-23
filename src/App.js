import React from 'react';
import './App.css';

import cars from "./cars.json";

import FilterableCarList from './FilterableCarList';


function App() {
  return (
      <div className="App">
        <header>
        <h1>SAS Web UI Developer Project</h1>
        </header>
        <main role="main">
            <p>There are {cars.length} cars in the data.</p>


            <FilterableCarList cars={cars} />
        </main>
      </div>
  );
}

export default App;
