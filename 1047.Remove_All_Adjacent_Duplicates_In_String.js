/**
1047. Remove All Adjacent Duplicates In String
利用栈
 */
var removeDuplicates = function(s) {
    let stack = [];
    for (let c of s) {
        if (stack.length && (c == stack.at(-1))) {
            stack.pop();
        } else stack.push(c);
    }
    return stack.join('');
};