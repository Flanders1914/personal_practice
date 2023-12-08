/**
1903. Largest Odd Number in String
水题
 */
var largestOddNumber = function(num) {
    let stack = Array.from(num);
    while (stack.length && !(Number(stack.at(-1)) % 2)) stack.pop();
    return stack.join('');
};
console.log(largestOddNumber('42'));