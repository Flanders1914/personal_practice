/*
128. Longest Consecutive Sequence
找出未排序数组内连续的数字 要求时间复杂度 O(n)
思路：利用set (假设set的查找、删除操作时间复杂度都是O(1))
先将nums数字转化为set，
遍历set，对于每一个num，初始化要从set中删到num并设置len = 1
判断该num前后的数字是否在set中，若是，len++，并且删除该元素

总之，思路就是在set中固定一个num然后将包括该num的 consecutive sequence 从 set中删除
以此保证时间复杂度为O(n)(因为每个元素只能删除1次)
*/
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let ans = 0;

    for (let num of set) {
        let len = 1;
        let count = 1;
        set.delete(num);
        while (set.has(num + count)) {
            set.delete(num + count);
            count++;
            len++;
        }
        count = 1;
        while (set.has(num - count)) {
            set.delete(num - count);
            count++;
            len++;
        }
        ans = (ans > len)? ans : len;
    }

    return ans;
};

console.log(longestConsecutive([100,4,200,1,3,2]));