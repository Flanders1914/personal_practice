/**
447. Number of Boomerangs
思路: 利用hash表统计相同i 情况下 不同的点到i的距离的情况
若同一距离有m个点，res += m(m-1) 即 m排列2
 */
var numberOfBoomerangs = function(points) {
    let hash = new Map();
    let res = 0;
    for (let i = 0; i <= points.length-1; i++) {
        hash.clear();
        for (let j = 0; j <= points.length-1; j++) {
            if (i == j) continue;
            let distance = (points[i][0] - points[j][0])**2 + (points[i][1] - points[j][1])**2;
            if (hash.has(distance)) hash.set(distance, hash.get(distance)+1);
            else hash.set(distance, 1);
        }
        for (let val of hash.values()) {
            if (val > 1) res += val * (val-1);
        }
    }
    return res;
};