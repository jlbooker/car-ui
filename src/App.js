import React from 'react';
import './App.css';

import cars from "./cars.json";

function App() {
  return (
      <div className="App">
        <h1>SAS Web UI Developer Project</h1>
        <p>See the Instructions.md files for what to do.</p>
        There are {cars.length} cars in the data.
      </div>
  );
}

export default App;
