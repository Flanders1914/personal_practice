/**
275. H-Index II
思路：二分查找，寻找在hindex范围中，且citation最小的paper的位置
该paper到数组末尾的长度是ans
注意两种特殊情况：
1.[0]
2.[0,0]
因为下面的二分查找需要满足length>1 且存在hindex范围内的paper
 */
var hIndex = function(citations) {
    let left = 0, right = citations.length-1;
    //可以简单得处理两种特殊情况
    if (citations.length == 1) {
        if (citations[0] > 0) return 1;
        else return 0;
    }
    if (citations.at(-1) <= 0) return 0;

    while (left < right) {
        let mid = (right+left) >> 1;
        if (mid == left) {
            if (citations[left] < (citations.length - left)) {
                return citations.length -right;
            }
            else return citations.length-left;
        } 
        if (citations[mid] < (citations.length - mid)) left = mid;
        else right = mid;
    }
};
console.log(hIndex([0,1,3,5,6]));