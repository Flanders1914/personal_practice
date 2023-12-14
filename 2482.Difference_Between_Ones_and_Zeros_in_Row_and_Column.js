/**
思路：水题
 */
var onesMinusZeros = function(grid) {
    const diff = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(0));
    for (let i = 0; i <= grid.length-1; i++) {
        let difference = 0;
        for (let j = 0; j <= grid[0].length-1; j++) {
            if (grid[i][j] == 1) difference++;
            else difference--;
        }
        for (let j = 0; j <= grid[0].length-1; j++) {
            diff[i][j] = difference;
        }
    }
    for (let j = 0; j <= grid[0].length-1; j++) {
        let difference = 0;
        for (let i = 0; i <= grid.length-1; i++) {
            if (grid[i][j] == 1) difference++;
            else difference--;
        }
        for (let i = 0; i <= grid.length-1; i++) {
            diff[i][j] += difference;
        }
    }
    return diff;
};
let grid = [[0,1,1],[1,0,1],[0,0,1]];
for (let row of onesMinusZeros(grid)) console.log(row);