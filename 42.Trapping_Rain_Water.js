/*
42. Trapping Rain Water
思路：
1. 每一步只考虑柱顶部的水柱
2. 在每一步，顶部水柱 == min(左边的最高柱，右边的最高柱) - 自身的高度
3. 所以可以先算出每一个柱子左边和右边最高的柱子的高度是多少，然后计算得到答案

改进思路：用一个循环，不存储left和right而是在遍历中动态生成左侧最高和右侧最高值

注意点：
JS arr.at() 只能取值不能用作赋值对象
 */

var trap = function(height) {
    let len = height.length;
    let left = new Array(len).fill(0);
    let right = new Array(len).fill(0);

    left[0] = height[0];
    for (let i = 1; i <= len -1; i++) {
        if (height[i] > left[i -1]) left[i] = height[i];
        else left[i] = left[i -1];
    }

    right[len -1]= height.at(-1);
    for (let i = len -2; i >= 0; i--) {
        if (height[i] > right[i +1]) right[i] = height[i];
        else right[i] = right[i +1];
    }

    let ans = 0;
    for (let i = 0; i <= len -1; i++) {
        ans += (left[i] < right[i])? left[i]-height[i] : right[i]-height[i];
    }

    return ans;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));