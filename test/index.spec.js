import {
    isNonNegative,
    max
} from "../src/index";


describe("Comparisons", () => {
    it("0 should be non negative", () => {
        const result = isNonNegative(0);
        expect(result).toBe(true);
    });

    it("3 should be non negative", () => {
        const result = isNonNegative(3);
        expect(result).toBe(true);
    });

    it("-3 should be negative", () => {
        const result = isNonNegative(-3);
        expect(result).toBe(false);
    });
});

describe('Max', () => {
    it('should return 4 for max(4, 3)', () => {
        expect(max(4, 3)).toBe(4);
    });
    it('should return 4 for max(3, 4)', () => {
        expect(max(3, 4)).toBe(4);
    });
    it('should return 3 for max(3, 3)', () => {
        expect(max(3, 3)).toBe(3);
    });
});
