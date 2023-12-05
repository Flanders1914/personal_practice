/**
2300. Successful Pairs of Spells and Potions
思路：二分查找
注意事项：
potions的长度可能是1所以 while 循环内的判断条件为 l <= r 或 true
当product和target相等的情况往左找第一个相等的坐标，即r = mid
注意若最大的potion*spell < success 直接输出0
 */
function biSearch(arr, spell, target) {
    let l = 0;
    let r = arr.length-1;
    if (arr.at(-1)*spell < target) return 0;
    while (l <= r) {
        let mid = (l+r) >> 1;
        let product = arr[mid]*spell;
        if (l == mid) {
            if (product < target) return arr.length-r;
            else return arr.length-l;
        }
        if (product < target) l = mid;
        else r = mid;
    }
}

var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    let res = [];
    for (let spell of spells) {
        res.push(biSearch(potions, spell, success));
    }
    return res;
};
let spells = [5,1,3], potions = [1,2,3,4,5], success = 7;
console.log(successfulPairs(spells, potions, success));