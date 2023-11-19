/**
417. Pacific Atlantic Water Flow
思路: 搜索法，第一遍搜索能达到太平洋的地区
第二遍搜索能达到大西洋的地方，重复的地区标上记号
 */
var pacificAtlantic = function(heights) {
    let map = new Array(heights.length).fill().map(() => new Array(heights[0].length).fill(0));

    let search = function(heights, map, i, j, flag) {
        if (flag == 1) {
            if (map[i][j] == 0) map[i][j] = 1;
            else return;
        } else {
            if (map[i][j] == 0) map[i][j] = 2;
            else if (map[i][j] == 1) map[i][j] = 3;
            else return;
        }
        if (i > 0 && heights[i-1][j] >= heights[i][j]) search(heights, map, i-1, j, flag);
        if (i < map.length-1 && heights[i+1][j] >= heights[i][j]) search(heights, map, i+1, j, flag);
        if (j > 0 && heights[i][j-1] >= heights[i][j]) search(heights, map, i, j-1, flag);
        if (j < map[0].length-1 && heights[i][j+1] >= heights[i][j]) search(heights, map, i, j+1, flag);
    };

    for (let i = 0; i <= map.length-1; i++) {
        if (map[i][0] == 0) search(heights, map, i, 0, 1);
    }
    for (let j = 0; j <= map[0].length-1; j++) {
        if (map[0][j] == 0) search(heights, map, 0, j, 1);
    }
    for (let i = 0; i <= map.length-1; i++) {
        if (map[i][map[0].length-1] == 0 || map[i][map[0].length-1] == 1) search(heights, map, i, map[0].length-1, 2);
    }
    for (let j = 0; j <= map[0].length-1; j++) {
        if (map[map.length-1][j] == 0 || map[map.length-1][j] == 1) search(heights, map, map.length-1, j, 2);
    }
    let res = [];
    for (let i = 0; i <= map.length-1; i++) {
        for (let j = 0; j <= map[0].length-1; j++) {
            if (map[i][j] == 3) res.push([i,j]);
        }
    }
    return res;
};
console.log(pacificAtlantic([[0]]));