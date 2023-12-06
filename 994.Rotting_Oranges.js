/**
994. Rotting Oranges
思路：BFS
注意边缘条件 fresh == 0 和 开始就不存在腐烂橘子 current.length == 0
 */
var orangesRotting = function(grid) {
    let current = [];
    let fresh = 0;
    for (let i = 0; i <= grid.length-1; i++) {
        for (let j = 0; j <= grid[0].length-1; j++) {
            if (grid[i][j] == 2) current.push([i,j]);
            else if (grid[i][j] == 1) fresh++;
        }
    }

    let time = 0;
    if (fresh == 0) return 0; // 注意若无新鲜橘子直接输出0

    while (current.length) {
        let next = [];
        time++;
        for (let [i,j] of current) {
            if (i && (grid[i-1][j] == 1)) {
                fresh--;
                grid[i-1][j] = 2;
                next.push([i-1,j]);
            }
            if ((i < grid.length-1) && (grid[i+1][j] == 1)) {
                fresh--;
                grid[i+1][j] = 2;
                next.push([i+1,j]);
            }
            if (j && (grid[i][j-1] == 1)) {
                fresh--;
                grid[i][j-1] = 2;
                next.push([i,j-1]);
            }
            if ((j < grid[0].length-1) && (grid[i][j+1] == 1)) {
                fresh--;
                grid[i][j+1] = 2;
                next.push([i,j+1]);
            }
        }
        current = next;
    }
    if (fresh == 0) return time-1;
    else return -1;
};
console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));