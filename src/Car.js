import React from 'react';

function handleKeyPress(e){
    e.preventDefault();
    if(e.key === 'ArrowDown'){
        const nextItem = document.activeElement.nextSibling;
        if(nextItem !== null){
            nextItem.focus();
        }
    }

    if(e.key === 'ArrowUp'){
        const prevItem = document.activeElement.previousSibling;
        if(prevItem !== null){
            prevItem.focus()
        }

    }
}

function Car(props) {

    return (
        <li tabIndex="0" onKeyDown={handleKeyPress}>
            {props.make} {props.model}, {props.type} from {props.origin}
        </li>
    )
}

export default Car;
