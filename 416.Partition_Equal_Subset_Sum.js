/**
416. Partition Equal Subset Sum
思路: 优化搜索
target为和的一半
set存储之前的值所能产生的所有不同的和
最坏情况下时间复杂度O(n^3)
 */
var canPartition = function(nums) {
    let sum = 0;
    for (let num of nums) sum += num;
    if (sum % 2) return false;
    sum = sum >> 1;
    let set = new Set();
    for (let num of nums) {
        let next = [num];
        if (num == sum) return true;
        for (let value of set) {
            if (value + num == sum) return true;
            else if (value + num < sum) next.push(value + num); 
        }
       for (let val of next) set.add(val);
    }
    return false;
};
console.log(canPartition([1,2,3,4,5,6,7]));