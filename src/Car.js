import React from 'react';

function Car(props) {

    return (
        <li>
            {props.make} {props.model}, {props.type} from {props.origin}
        </li>
    )
}

export default Car;
