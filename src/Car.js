import React from 'react';

// Handle up/down arrow keys for keyboard navigation of list items
// For a longer-term project, I'd probably use the useEffect hook to
// register/unregister a more general event handler and go from there.
// This feels a little hack-ish, but good enough for this exercise.
function handleKeyPress(e){
    if(e.key === 'ArrowDown'){
        e.preventDefault();
        // Find the next item in list (if any) and give it the focus
        const nextItem = document.activeElement.nextSibling;
        if(nextItem !== null){
            nextItem.focus();
        }
    }

    if(e.key === 'ArrowUp'){
        e.preventDefault();
        // Find the previous item in list (if any) and give it the focus
        const prevItem = document.activeElement.previousSibling;
        if(prevItem !== null){
            prevItem.focus()
        }

    }
}

// Represents an individual car list item
function Car(props) {

    return (
        <li tabIndex="0" onKeyDown={handleKeyPress}>
            {props.make} {props.model}, {props.type} from {props.origin}
        </li>
    )
}

export default Car;
