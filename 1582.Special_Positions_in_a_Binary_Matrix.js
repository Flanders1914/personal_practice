/**
1582. Special Positions in a Binary Matrix
先筛选出行上special的集合，然后判断列上是否special
 */
var numSpecial = function(mat) {
    let res = 0;
    let set = [];
    outer: for (let i = 0; i <= mat.length-1; i++) {
        let count = 0;
        for (let j = 0; j <= mat[0].length-1; j++) {
            if (mat[i][j]) {
                count++;
                set.push([i,j])
            }
            if (count == 2) {
                set.pop();
                set.pop();
                continue outer;
            }
        }
    }
    outer: for (let [i, j] of set) {
        let count = 0;
        for (let k = 0; k <= mat.length-1; k++) {
            if (mat[k][j]) {
                count++;
                if (count == 2) continue outer;
            }
        }
        if (count == 1) res++;
    }
    
    return res;
};
console.log(numSpecial([[0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,1,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0,0,0,0,0],[1,0,1,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0]]));