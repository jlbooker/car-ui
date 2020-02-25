import React from 'react';

import Car from './Car.js';

/**
 * Simple car list component. Creates an un-ordered list of the cars given.
 */
function CarList(props) {

    const carListItems = props.cars.map((car) =>
        <Car make={car.make}
            model={car.model}
            type={car.type}
            origin={car.origin}
            key={car.make + car.model}
            />
    );

    let carList = '';
    if(props.cars.length > 0) {
        carList = (
            <ul id="car-list">
                {carListItems}
            </ul>
        );
    } else {
        carList = (
            <p tabindex="0">No cars in list.</p>
        );
    }

    return (
        <div>
            <h2>List of Cars</h2>
            {carList}
        </div>
    );
}

export default CarList;
