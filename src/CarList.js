import React from 'react';

import Car from './Car.js';

function CarList(props) {

    const carListItems = props.cars.map((car) =>
        <Car make={car.make} model={car.model} type={car.type} origin={car.origin} />
    );

    return (
        <div>
            <p>List of Cars</p>
            <ul>
                {carListItems}
            </ul>
        </div>
    );
}

export default CarList;
