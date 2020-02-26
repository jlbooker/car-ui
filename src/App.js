import React from 'react';
import './App.css';

import cars from "./cars.json";

import FilterableCarList from './FilterableCarList';

/**
 * Main application component, handles top-level markup
 */
function App() {

    // Sort cars alphabetically by Make then Model
    const sortedCars = cars.sort(function(a, b){
        // If makes are equal, sort by model
        if(a.make < b.make){
            return -1;
        } else if (a.make > b.make){
            return 1;
        } else {
            // Make's must be equal, sort by model
            if(a.model < b.model){
                return -1;
            }
            if(a.model > b.model){
                return 1;
            }
        }

        // Makes and models are both equal, so no sort order
        return 0;
    });

    // TODO: Create individual car description strings all at once and save them
    // for later use in searching and display.

  return (
      <div className="App">
        <header>
        <h1>SAS Web UI Developer Project</h1>
        </header>
        <main role="main">
            <p>There are {cars.length} cars in the data.</p>


            <FilterableCarList cars={sortedCars} />
        </main>
      </div>
  );
}

export default App;
