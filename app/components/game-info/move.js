import React from 'react';

export default function Move(move, onClick) {
    const description = move ? 'Move #' + move : 'Game Start';

    return (
        <li>
           <a
                href='#'
                className="moves"
                onClick={ () => onClick }
           >
                { description }
           </a>
        </li>
    );
}