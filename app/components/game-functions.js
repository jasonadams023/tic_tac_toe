export function calculateWinner(squares) {
    ////check rows
    for (let x = 0; x < squares.length; x++) {
        let winner = squares[x][0];
        for (let y = 0; y < squares[x].length - 1; y++) {
            if (winner !== squares[x][y + 1]) {
                winner = null;
            }
        }

        if (winner !== null) {
            return winner;
        }
    }


    ////check columns
    for (let y = 0; y < squares[0].length; y++) {
        let winner = squares[0][y];
        for (let x = 0; x < squares.length - 1; x++) {
            if (winner !== squares[x + 1][y]) {
                winner = null;
            }
        }

        if (winner !== null) {
            return winner;
        }
    }

    ////check diagonals
    let winner = squares[0][0];
    let x = 1;
    let y = 1;
    for (; x < squares.length && y < squares[0].length; x++, y++) {
        if (winner !== squares[x][y]) {
            winner = null;
        }
    }

    if (winner !== null) {
        return winner;
    }

    x = squares.length - 1;
    y = 0;
    winner = squares[x][y];
    for (; x >= 0 && y < squares[x].length; x--, y++) {
        if (winner !== squares[x][y]) {
            winner = null;
        }
    }

    if (winner !== null) {
        return winner;
    }


    return null;
}

export function calculateTie(squares) {
    for (let x = 0; x < squares.length; x++) {
        for (let y = 0; y < squares[x].length; y++) {
            if (squares[x][y] === null) {
                return false;
            }
        }
    }

    return true;
}

export function generateBoard(size) {
    let rows = [];
    let board = [];

    for (let i = 0; i < size; i++) {
        rows.push(Array(size).fill(null));
        board.push(rows[i]);
    }

    return board;
}