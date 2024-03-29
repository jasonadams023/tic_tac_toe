import { calculateBoardFull, generateBoard } from '../../../app/components/game-functions';

describe('calculateTie', () => {
    let squares;
    let x = 'X';
    let o = 'O';

    beforeEach(() => {
        squares = generateBoard(3);
    })

    it('returns false while board is not full', () => {
        expect(calculateBoardFull(squares)).toBe(false);
    });

    it('returns true if the board is full', () => {
        squares[0][0] = x;
        squares[0][1] = o;
        squares[0][2] = x;
        squares[1][0] = x;
        squares[1][1] = o;
        squares[1][2] = x;
        squares[2][0] = o;
        squares[2][1] = x;
        squares[2][2] = o;

        expect(calculateBoardFull(squares)).toBe(true);
    });
});
