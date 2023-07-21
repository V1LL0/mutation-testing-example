
export const isNonNegative = (a) => {
    return a >= 0;
}

export const max = (a, b) => {
    // Stryker disable next-line EqualityOperator: disabled because it results in equivalent mutant
    return a < b ? b : a;
}
