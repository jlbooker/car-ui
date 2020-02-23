import React from 'react';

import Car from './Car.js';

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
            <ul>
                {carListItems}
            </ul>
        );
    } else {
        carList = (
            <p>No cars in list.</p>
        );
    }

    return (
        <div>
            <p>List of Cars</p>
            {carList}
        </div>
    );
}

export default CarList;
