import React from 'react';

import Car from './Car.js';

/**
 * Car list component. Creates an un-ordered list of the cars given via props.
 */
function CarList(props) {

    // Create array of Car components for each car in dataset.
    const carListItems = props.cars.map((car) =>
        <Car make={car.make}
            model={car.model}
            type={car.type}
            origin={car.origin}
            key={car.make + car.model}
            />
    );

    // Display the list if there are items available to show, otherwise show
    // a helpful message.
    let carList = '';
    if(props.cars.length > 0) {
        carList = (
            <ul id="car-list">
                {carListItems}
            </ul>
        );
    } else {
        carList = (
            <p tabindex="0">There are no cars that match your filter.</p>
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
