/**
547. Number of Provinces
思路：简单的搜索
 */
var findCircleNum = function(isConnected) {
    const visit = function(isConnected, current) {
        for (let j = 0; j <= isConnected[0].length-1; j++) {
            if (is_visited.has(j) || !isConnected[current][j]) continue;
            is_visited.add(j);
            visit(isConnected, j);
        }
    };

    let is_visited = new Set();
    let res = 0;
    for (let i = 0; i <= isConnected.length-1; i++) {
        if (is_visited.has(i)) continue;
        res++;
        is_visited.add(i);
        visit(isConnected, i);
    }
    return res;
};
console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]));