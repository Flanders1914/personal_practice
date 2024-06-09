/**
 * 974. Subarray Sums Divisible by K
 * 利用区间和
 * Si - Sj = aj+1 + aj+2 + ... + ai
 * （Si - Sj) % k = 0
 * Si%k 和 Sj%k 拥有相同的余数
 * 注意 Si%k 可能有负数， ＋k 转化为正数就行
 */
var subarraysDivByK = function(nums, k) {
    let map = new Map();
    map.set(0, 1);
    let sum = 0;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let remain = sum % k;
        if (remain < 0) remain += k;
        if (map.has(remain)) {
            let target = map.get(remain);
            res += target;
            map.set(remain, target+1);
        } else {
            map.set(remain, 1);
        }
    }

    return res;
};