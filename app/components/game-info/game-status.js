import React from 'react';

export default function GameStatus (props) {
    let output;
    if (props.winner) {
      output = "Winner is: " + props.winner;
    } else if (props.tie) {
      output = "Cat's Game";
    }else {
      output = "Next player: " + props.nextPlayer;
    }

    return (
        <div id="status">
            { output }
        </div>
    );
}