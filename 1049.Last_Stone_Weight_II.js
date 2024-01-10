/**
1049. Last Stone Weight II
思路：首先这道题可以转换为给stones数组每一项前加+/- 最后得到的运算式的最小值
然后我们用一个set存储当前stone到第一个stone组成的运算式的所有可能值
对于下一个stone可以用这个set生成获得下一个stone后组成的运算式的所有可能值
 */
var lastStoneWeightII = function(stones) {
    if (stones.length == 1) return stones[0];
    let memo = new Set();
    let res;
    memo.add(stones[0]);
    for (let i = 1; i <= stones.length-1; i++) {
        let next = new Set();
        res = Number.MAX_VALUE;
        
        for (let candid of memo) {
            temp1 = candid+stones[i];
            temp2 = Math.abs(candid-stones[i]);
            res = Math.min(res, temp1, temp2);
            next.add(temp1);
            next.add(temp2);
        }

        memo = next;
    }

    return res;
}; 
let arr = [6,6,3,6,3,2,5,1];
console.log(lastStoneWeightII(arr));