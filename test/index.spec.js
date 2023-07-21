import {
    isNonNegative,
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
});
