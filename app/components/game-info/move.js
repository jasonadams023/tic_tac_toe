import React from 'react';

export default function Move(props) {
    return (
        <li className={ props.class }>
           <button onClick={ props.onClick } >
                { props.description }
           </button>
        </li>
    );
}