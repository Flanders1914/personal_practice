/**
457. Circular Array Loop
思路：快慢指针法
注意：题目要求循环长度 >1 且循环内元素符号相同
这里的解还是用了O(n) 的额外空间
用O(1)额外空间的方式是在每次寻找过后再走一遍整个路径用0标记走不通的点
 */
var circularArrayLoop = function(nums) {
    let n = nums.length;
    let set = new Set();
    outer: for (let i = 0; i <= n-1; i++) {
        if (set.has(i)) continue;
        let fast = i;
        let slow = i;
        set.add(slow);
        let pre;
        while (true) {
            pre = slow;
            fast += nums[fast] % n;
            fast = (fast + n) % n;
            fast += nums[fast] % n;
            fast = (fast + n) % n;

            slow += nums[slow] % n;
            slow = (slow + n) % n;
            set.add(slow);
            if (fast == slow) {
                if (nums[slow] == 0) continue outer;
                let sign = (nums[slow] > 0)? 1 : -1;
                let begin = slow;
                slow += nums[slow] % n;
                slow = (slow + n) % n;
                set.add(slow);
                if (slow == begin || sign*nums[slow] < 0) continue outer;
                while (slow != begin) {
                    slow += nums[slow] % n;
                    slow = (slow + n) % n;
                    set.add(slow);
                    if (sign * nums[slow] < 0) continue outer;
                }
                return true;
            }
        }
    }
    return false;
};
console.log(circularArrayLoop([-2,1,-1,-2,-2]));