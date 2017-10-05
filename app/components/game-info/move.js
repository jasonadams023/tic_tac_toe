import React from 'react';

export default function Move(props) {
    const description = props.move ? 'Move #' + props.move : 'Game Start';

    return (
        <li>
           <button
                className="moves"
                onClick={ () => props.onClickFunction(move) }
           >
                { description }
           </button>
        </li>
    );
}