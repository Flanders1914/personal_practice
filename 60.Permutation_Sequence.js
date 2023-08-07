/*
60. Permutation Sequence
求解第k个排列
利用数学性质优化的算法
即对于k个元素，以每个元素为开头都有(k-1)！个排列，因此对于每一层递归
可以固定开头的元素，然后将规模降低。

注意：
第 i(k-1)! 个排列，开头元素是 i-1 而非 i,并在下一层中寻找
第(k-1)! 个排列
*/

function factorial(n) {
    if (n == 0) return 1;
    else return n*factorial(n-1);
}

function find_Permutation(nums, k, last) {

    if (k == 1 ) {
        nums.forEach((item) => last.push(item));
        return last;
    }

    let n = nums.length;
    let current = last.slice();
    let sub_num = factorial(n-1);

    if (k <= sub_num) {
        current.push(nums[0]);
        nums.splice(0,1);
        return find_Permutation(nums, k, current);
    }
    else {
        let index = Math.floor(k/sub_num);
        index = (k % sub_num == 0)? index -1 : index;
        current.push(nums[index]);
        nums.splice(index,1);
        let next = (k % sub_num == 0)? sub_num : k % sub_num;
        return find_Permutation(nums,next, current);
    }
}

var getPermutation = function(n, k) {
    let nums = [];
    for (let i = 1; i <= n; i++) nums.push(i);
    return find_Permutation(nums,k,[]).join('');
};

console.log(getPermutation(2,2));