import React from 'react';
import TicTacToeStatus from './tic-tac-toe-status';
import Moves from './moves.js';

export default function GameInfo () {
    return (
        <div className="game-info">
          < TicTacToeStatus />
          < Moves />
        </div>
    );
}