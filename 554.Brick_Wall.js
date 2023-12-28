/**
554. Brick Wall
思路：用hash表记录某个位置缝隙个个数
该位置穿过砖的数量即 wall.length - hash.val
注意不要统计头尾的，因为头尾会将res归零
 */
var leastBricks = function(wall) {
    const hash = new Map();
    for (let i = 0; i <= wall.length-1; i++) {
        let sum = 0;
        for (let j = 0; j <= wall[i].length-2; j++) {
            sum += wall[i][j];
            if (hash.has(sum)) hash.set(sum, hash.get(sum) +1);
            else hash.set(sum, 1);
        }
    }
    let res = wall.length;
    for (let val of hash.values()) {
        res = Math.min(res, wall.length - val);
    }
    return res;
};
