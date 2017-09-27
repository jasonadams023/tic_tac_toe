import React from 'react';

import Square from './square.js';

export default class Board extends React.Component {
  renderSquare(x, y) {
    return  (
                <Square
                    key={ x + '-' + y }
                    value={ this.props.squares[x][y] }
                    onClick={ () => this.props.onClick(x, y) }
                />
            );
  }

  render() {
    return (
        <div>
            {
                this.props.squares.map((row, xIndex) => {
                    return <div key={ xIndex } className="board-row">
                        {
                            row.map((space, yIndex) => {
                                return this.renderSquare(xIndex, yIndex)
                            })
                        }
                    </div>
                })
            }
        </div>
    );
  }
}