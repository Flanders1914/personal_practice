/**
403. Frog Jump
思路1：set优化的搜索 beat 88%
思路2：dp[i]存储当前石头可用下一步的set 时间复杂度O(n^2) 实操速度远不如思路1
 */
/*
var canCross = function(stones) {
    let cache = new Set();
    let dfs = function(index, step) {
        let next = step-1;
        if (index == stones.length-1) return true;
        else {
            let i = index+1;
            while (i <= stones.length -1 && stones[i]-stones[index] < next) i++;
            if (i == stones.length) return false;
            if (stones[i] - stones[index] == next) {
                if (!cache.has(`${i}-${next}`)) {
                    if (dfs(i, next)) return true;
                    else cache.add(`${i}-${next}`);
                } 
            }
            while (i <= stones.length -1 && stones[i] - stones[index] < next+1) i++;
            if (i == stones.length) return false;
            if (stones[i] - stones[index] == next+1) {
                if (!cache.has(`${i}-${next+1}`)) {
                    if (dfs(i, next+1)) return true;
                    else cache.add(`${i}-${next+1}`);
                } 
            }
            while (i <= stones.length -1 && stones[i] - stones[index] < next+2) i++;
            if (i == stones.length) return false;
            if (stones[i] - stones[index] == next+2) {
                if (!cache.has(`${i}-${next+2}`)) {
                    if (dfs(i, next+2)) return true;
                    else cache.add(`${i}-${next+2}`);
                } 
            }
            return false;
        }
    };
    return dfs(0,0);
};
*/
var canCross = function(stones) {
    let dp = new Array(stones.length).fill().map(() => new Set());
    dp[0].add(1);

    for (let i = 1; i <= stones.length-1; i++) {
        for (let j = 0; j <= i-1; j++) {
            let distance = stones[i] - stones[j];
            if (dp[j].has(distance)) {
                dp[i].add(distance);
                dp[i].add(distance+1);
                dp[i].add(distance-1);
            }
        }
    }
    if (dp.at(-1).size > 0) return true;
    else return false;
};
console.log(canCross([0,1,3,5,6,8,12,17]));