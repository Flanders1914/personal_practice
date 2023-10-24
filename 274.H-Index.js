/**
274. H-Index
思路：对citations进行排序，从高引用向引用遍历，直到遍历的次数（高引用paper）>引用的次数
返回遍历的次数减一
这道题在排序后可以用二分查找做见 H-index_II
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let ans = 0;
    for (let i = citations.length-1; i >= 0; i--) {
        ans++;
        if (citations[i] >= ans) {
            continue;
        } else return ans-1;
    }
    return ans;
};

console.log(hIndex([3,0,6,1,5]));