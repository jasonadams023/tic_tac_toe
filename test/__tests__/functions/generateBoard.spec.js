import { generateBoard } from '../../../app/components/game-functions';

describe('generateBoard', () => {
    it('returns empty array when given a size of 0', () => {
        expect(generateBoard(0)).toEqual([]);
    });

    it('returns an array with an array of null when given a size of 1', () => {
        expect(generateBoard(1)).toEqual([[null]]);
    });

    it('returns an array of arrays filled with null when given a size of 3', () => {
        const row0 = Array(3).fill(null);
        const row1 = Array(3).fill(null);
        const row2 = Array(3).fill(null);
        const board = [row0, row1, row2];

        expect(generateBoard(3)).toEqual(board);
    });
});