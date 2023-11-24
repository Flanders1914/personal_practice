/**
453. Minimum Moves to Equal Array Elements
思路：对于n-1个元素＋1 相当于对1个元素-1
将所有元素减到最低值的次数为答案
 */
var minMoves = function(nums) {
    let res = 0;
    let min = Math.min(...nums);
    for (let num of nums) {
        res += num - min;
    }
    return res;
};
console.log(minMoves([1,2,3,4]));