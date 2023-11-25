/**
463. Island Perimeter
思路：找到所有island的点，判断上下左右是否有水
 */
var islandPerimeter = function(grid) {
    let res = 0;
    for (let i =  0; i <= grid.length-1; i++) {
        for (let j = 0; j <= grid[0].length-1; j++) {
            if (grid[i][j]) {
                if (i == 0) res++;
                else if (grid[i-1][j]^grid[i][j]) res++;
                if (i == grid.length-1) res++;
                else if (grid[i+1][j]^grid[i][j]) res++;
                if (j == 0) res++;
                else if (grid[i][j-1]^grid[i][j]) res++;
                if (j == grid[0].length-1) res++;
                else if (grid[i][j+1]^grid[i][j]) res++;
            }
        }
    }
    return res;
};
console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));