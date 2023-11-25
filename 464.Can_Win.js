/**
464. Can I Win
思路：利用hash表的优化搜索，重点在于利用bitmask来表示状态
对于数i，如果被用过，那么mask的第i+1位为1，否则为0
这样生成一个存储当前数字使用情况的state
剩下的步骤就是用递归写一个搜索，利用hash表存储已经搜索过的state
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= maxChoosableInteger) return true;
    if ((maxChoosableInteger*(maxChoosableInteger+1)/2 < desiredTotal)) return false;
    let memo = new Map();
    
    let search = function(state, current) {
        if (memo.has(state)) return memo.get(state);
        if (current >= desiredTotal) {
            memo.set(state, false);
            return false;
        }
        for (let i = 1; i <= maxChoosableInteger; i++) {
            let mask = 1 << i;
            if (!(mask & state)) {
                let next = state | mask;
                if (!(search(next, current+i))) {
                    memo.set(state, true);
                    return true;
                } 
            }
        }

        memo.set(state, false);
        return false;
    };
    return search(0, 0);
};
console.log(canIWin(4,6));