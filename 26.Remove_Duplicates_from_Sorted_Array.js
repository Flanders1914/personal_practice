/*
26. Remove Duplicates from Sorted Array
SB题目，实际上要求返回ans的长度并修改原数组
没什么难点，需要注意的是JS的参数传递特性：

jS的传参是要分两种情况（其实这是个错误的说法，ECMAScript中所有函数的参数都是按值传递的
之所以这里说两种，是因为结合引用传参更容易理解）:

1. 值传参针对基本类型，传参可以理解为复制变量值。基本类型复制后俩个变量完全独立

2. 引用类型复制的是引用（即指针），可以把ECMAScript函数的参数想象成局部变量。在向参数传递基本类型的值时，
被传递的值被复制给一个局部变量。在向参数传递引用类型时，会把这个值在内存中的地址（指针）复制给一个局部变量，
因此这个局部变量的变化会反映在函数的外部

leetcode隐藏的主函数把主函数中的nums地址传递给参数（局部变量）nums
 */

var removeDuplicates = function(nums) {
    let ans = [], last = null;

    for (let num of nums) {
        if (last === null || last != num) {
            ans.push(num);
            last = num;
        }
    }

    for (i = 0; i < ans.length; i++) nums[i] = ans[i];
    return ans.length;
  };

let nums = [1,1,2];
console.log(removeDuplicates(nums));
console.log(nums);