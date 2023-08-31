/*
151. Reverse Words in a String
思路：使用 split 和 join 即可
注意：连续的空格在split后会生成空字符串
另外 str.trim() 可以删除前后空格
*/
var reverseWords = function(s) {
    let stack = s.split(' ');
    let arr = [];
    while (stack.length) {
        let str = stack.pop();
        if (str != '') arr.push(str);
    }
    return arr.join(' ');
};

console.log(reverseWords("  hello world  "));l