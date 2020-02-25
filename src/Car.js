import React from 'react';

function handleKeyPress(e){
    if(e.key === 'ArrowDown'){
        e.preventDefault();
        const nextItem = document.activeElement.nextSibling;
        if(nextItem !== null){
            nextItem.focus();
        }
    }

    if(e.key === 'ArrowUp'){
        e.preventDefault();
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
