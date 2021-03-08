
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined || matrix.length == 0) return [];

    return matrix
        .map((row, i) => i % 2 ? row.reverse() : row)
        .flat();
}
