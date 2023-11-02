/**
287. Find the Duplicate Number
思路：将i->nums[i]看作list的映射，所以我们得到了一个带有循环的图
于是我们按照142. Linked List Cycle II
做法：快慢指针，fast速度是slow两倍
假设fast与slow相遇在k点，此时设置k点和head为起点，两者速度均为前进一步，相遇点为起点

注意：在k点 fast前进了2n步，slow前进了n步，循环长n步
设 n = a + b (a为循环外的步数)
当从head开始的指针走了a步时，slow走了n+a步
即回到了循环起点，所以必然相遇于循环起点
 */
var findDuplicate = function(nums) {
    let fast = nums[nums[0]];
    let slow = nums[0];
    while (fast != slow) {
        fast = nums[nums[fast]];
        slow = nums[slow];
    }
    fast = 0;
    while (fast != slow) {
        fast = nums[fast];
        slow = nums[slow];
    }
    return fast;
};
console.log(findDuplicate([3,2,0,-4]));