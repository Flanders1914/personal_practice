/*
134. Gas Station
贪心法：
注意：如果从A到B的remain <0，那么在A,B之间任何一个点都达不到B
证明：
假设C为其中一点且A能够到C，那么remain(A-C) >0
但是 remain(A-B) <0 且 remain（A-B）= remain(A-C) + remain(C-B)
remain(C-B) 必然小于0

因此如果我们从0开始，若到了点i remain < 0 
意味着：可能的起点只能在点i之后
*/
var canCompleteCircuit = function(gas, cost) {
    let total = 0; remain = 0, index = 0;
    for (let i = 0; i <= gas.length -1; i++) {
        remain += gas[i] - cost[i];
        total += gas[i] - cost[i];
        if (remain < 0) {
            index = i +1;
            remain = 0;
        }
    }

    if (total < 0) return -1;
    else return index;
};

let gas = [1], cost = [0];
console.log(canCompleteCircuit(gas, cost));