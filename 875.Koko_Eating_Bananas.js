/**
875. Koko Eating Bananas
思路：二分查找
先确定一个速度的区间然后在这个区间内寻找最小的满足速度
时间复杂度O(mlogn)
速度肯定 >= total//h
速度肯定 <= max(piles)
 */
function count(piles, s) {
    let res = 0;
    for (let pile of piles) {
        res += Math.floor(pile/s);
        if (pile % s) res++;
    }
    return res;
}
var minEatingSpeed = function(piles, h) {
    let total = 0, max = 0;
    for (let pile of piles) {
        total += pile;
        max = Math.max(max, pile);
    }
    if (piles.length == h) return max;
    let l = Math.floor(total/h); // 最慢速度
    let r = max; //最快速度

    while (l < r) {
        let mid = (l+r) >> 1;
        let time = count(piles, mid);
        if (mid == l) {
            if (time <= h) return mid;
            else return r;
        }
        if (time > h) l = mid; // 注意等于的情况r = mid
        else r = mid;
    }
};
let piles = [3,6,7,11], h = 8;
console.log(minEatingSpeed(piles, h));