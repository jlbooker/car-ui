import React, {useState} from 'react';

import CarList from './CarList';

/**
 * FilterableCarList
 * Adds filtering functionality to a regular CarList component
 */
function FilterableCarList(props) {

    const [filterText, setFilterText] = useState('');

    // Case-sensitive sub-string search. A little brute force, but will do for now
    // TODO: optimize computing the description string in one place for better performance
    // and maintenance.
    // Consider using a RegEx to make this case insensitive
    let filteredCars = props.cars.filter(function(car){
        const descriptionString = car.make + " " + car.model + ", " + car.type + " from " + car.origin;
        return (descriptionString.includes(filterText) ? true : false);
    });

    return (
        <div>
            <form>
                <label htmlFor="filter-text-box">Filter cars: </label>
                <input type="text" id="filter-text-box"
                    onChange={e => setFilterText(e.target.value)}
                    value={filterText}
                    placeholder="Make, model, brand, or origin"
                    aria-placeholder="filter list by entering the car's make, model, brand, or origin"
                    aria-controls="car-list"
                />
            </form>

            <p aria-live="polite">{filteredCars.length} results</p>

            <CarList cars={filteredCars} />

            <button onClick={() => setFilterText('')}>Clear Filter</button>
        </div>
    )
}

export default FilterableCarList;
