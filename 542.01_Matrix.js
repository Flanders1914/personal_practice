/**
542. 01 Matrix
思路1：BFS
简单的BFS,注意BFS常见的问题即可
思路2： DP
这道题也可以用dp做
不过有一点点难想出来
可以看解析
 */
var updateMatrix = function(mat) {
    let n = mat.length;
    let m = mat[0].length;
   const res = new Array(n).fill().map(() => new Array(m).fill(0));
   let cache = [];
   for (let i = 0; i <= n-1; i++) {
    for (let j = 0; j <= m-1; j++) {
        if (!mat[i][j]) {
            mat[i][j] = '#';
            cache.push([i,j]);
        }
    }
   }

   let dis = 0;
   while (cache.length) {
    let next = [];
    for (let [i, j] of cache) {
        res[i][j] = dis;
        if ((i > 0) && (mat[i-1][j] != '#')) {
            next.push([i-1, j]);
            mat[i-1][j] = '#';
        }
        if ((i < n-1) && (mat[i+1][j] != '#')) {
            next.push([i+1, j]);
            mat[i+1][j] = '#';
        }
        if ((j > 0) && (mat[i][j-1] != '#')) {
            next.push([i, j-1]);
            mat[i][j-1] = '#';
        }
        if ((j < m-1) && (mat[i][j+1] != '#')) {
            next.push([i, j+1]);
            mat[i][j+1] = '#';
        }
    }
    cache = next;
    dis++;
   }

   return res;
};
let mat = [[0,0,0],[0,1,0],[1,1,1]];
for (let row of updateMatrix(mat)) console.log(row);