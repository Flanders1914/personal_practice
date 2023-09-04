/*
167. Two Sum II - Input Array Is Sorted
这里的思路是固定一个值然后二分查找
其实做麻烦了最坏情况时间复杂度O(nlogn) 当时没有细想加上结果还不错
最优越的做法就是从最左端和最右端向中间找
时间复杂度是O(n)
*/
var twoSum = function(numbers, target) {
    const binarySearch = function(target, left, right) {
        if (left > right) return -1;
        let mid = (left+right) >> 1;
        if (mid == left || mid == right) {
            if (numbers[left] == target) return left;
            else if (numbers[right] == target) return right;
            else return -1;
        }
        if (numbers[mid] == target) return mid;
        else if (numbers[mid] < target) return binarySearch(target, mid+1, right);
        else return binarySearch(target, left, mid-1);
    };

    for (let i = 0; i <= numbers.length-1; i++) {
        if (i && numbers[i] == numbers[i-1]) continue;
        let index = binarySearch(target-numbers[i], i+1, numbers.length);
        if (index != -1) {
            return [i+1,index+1];
        }
    }
};

let numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers,target));