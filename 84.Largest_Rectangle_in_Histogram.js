/**
思路：维护一个height non——decreased的栈
在栈中每个元素为[height, 实时计算的宽度]
每个元素的真正宽度 = 入栈前继承的宽度 + 入栈后出栈前栈中出去的其他元素数量

注意：
入栈前继承的宽度分两种情况
1. 栈没有元素出来，即元素左边的宽==0，为自身宽度1
2. 栈有元素出来，左边宽度存在
继承的宽度 = 出栈的元素数量(出栈元素均比该元素大) + (最后一个出栈元素的宽度-1)(即该元素左边的宽度) +1（自身宽度）
即 count + current[1]

应该还有其他简单做法
*/
var largestRectangleArea = function(heights) {
    let stack = [];
    let ans = 0;

    for (let i = 0; i <= heights.length -1; i++) {
        if ((!stack.length) || stack.at(-1)[0] <= heights[i]) {
            //元素满足stack是一个non-decreased的stack，把元素压入stack中
            stack.push([heights[i], 1]);
        } else {
            //开始出栈
            let count = 0; // 记录出栈的元素数量
            let current;
            while (stack.length && stack.at(-1)[0] > heights[i]) {
                current = stack.pop();
                if (ans < current[0]*(current[1] + count)) ans = current[0]*(current[1] + count);
                count++;
            }
            // 更新栈中的元素宽度
            for (let k = 0; k <= stack.length -1 ; k++) {
                stack[k][1] += count;
            }
            // 新元素入栈，新元素的宽度为: 出栈的元素数量+最后一个元素的出栈宽度
            stack.push([heights[i], current[1] + count]);
        }
    }

    // 结尾所有在栈中的元素出栈
    count = 0;
    while (stack.length) {
        let current = stack.pop();
        if (ans < current[0]*(current[1] + count)) ans = current[0]*(current[1] + count);
        count++;
    }

    return ans;
};

console.log(largestRectangleArea([4,2,0,3,2,5]))