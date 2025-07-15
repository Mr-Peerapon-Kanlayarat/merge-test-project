"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("../src/merge");
describe('merge()', () => {
    it('should merge sorted arrays correctly', () => {
        const collection1 = [1, 3, 5];
        const collection2 = [9, 6, 2]; // descending
        const collection3 = [4, 8, 10];
        const result = (0, merge_1.merge)(collection1, collection2, collection3);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10]);
    });
    it('should handle empty arrays', () => {
        const result = (0, merge_1.merge)([], [3, 2, 1], []);
        expect(result).toEqual([1, 2, 3]);
    });
    it('should handle duplicates correctly', () => {
        const result = (0, merge_1.merge)([1, 2, 3], [3, 2, 1], [2, 3, 4]);
        expect(result).toEqual([1, 1, 2, 2, 2, 3, 3, 3, 4]);
    });
    it('should return empty if all arrays are empty', () => {
        expect((0, merge_1.merge)([], [], [])).toEqual([]);
    });
});
