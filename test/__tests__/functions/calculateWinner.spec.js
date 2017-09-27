import { calculateWinner, generateBoard } from '../../../app/components/game-functions.js';

describe('calculateWinner', () => {
    let squares;
    let x = 'X';
    let y = 'Y';

    beforeEach(() => {
        squares = generateBoard(3);
    })

    it('returns null if there is no winner', () => {
        expect(calculateWinner(squares)).toBeNull();
    });

    it('checks for horizontal wins', () => {
        squares[0][0] = x;
        squares[0][1] = x;
        squares[0][2] = x;

        expect(calculateWinner(squares)).toBeTruthy();
        expect(calculateWinner(squares)).toBe(x);
    });

    it('checks for vertical wins', () => {
        squares[0][0] = y;
        squares[1][0] = y;
        squares[2][0] = y;

        expect(calculateWinner(squares)).toBeTruthy();
        expect(calculateWinner(squares)).toBe(y);
    });

    it('checks for diagonal wins', () => {
        squares[0][0] = x;
        squares[1][1] = x;
        squares[2][2] = x;

        expect(calculateWinner(squares)).toBeTruthy();
        expect(calculateWinner(squares)).toBe(x);
    });
});