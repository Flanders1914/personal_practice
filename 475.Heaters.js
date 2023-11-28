/**
475. Heaters
思路：利用二分查找计算每个house离heater最近的距离
然后取最大的最近距离为答案
 */
var findRadius = function(houses, heaters) {
    let binarySearch = function(arr, target) {
        let l = 0;
        let r = arr.length-1;
        while (l < r) {
            let mid = (l+r) >> 1;
            if (arr[mid] == target) return mid;
            if (mid == l) {
                return r;
            }
            if (arr[mid] > target) {
                r = mid;
            } else l = mid;
        }
    };
    houses.sort((a,b) => a-b);
    heaters.sort((a,b) => a-b);
    let longest_span = 0;
    for (let house of houses) {
        if (house <= heaters[0]) longest_span = Math.max(heaters[0] - house, longest_span);
        else if (house >= heaters.at(-1)) longest_span = Math.max(house - heaters.at(-1), longest_span);
        else {
            let index = binarySearch(heaters, house);
            let dis = Math.min(heaters[index]-house, house-heaters[index-1]);
            longest_span = Math.max(dis, longest_span);
        }
    }
    return longest_span;
};
let houses = [1,5], heaters = [2];
console.log(findRadius(houses, heaters));