/*
意义不明的题目，从后往前遍历即可
注意处理开头和结尾的空格
也可以使用str.trim() 减少点麻烦(浪费了处理时间)
下面的程序没有用
*/
var lengthOfLastWord = function(s) {
    let count = 0;
    let isAfterWord = false;

    for (let i = s.length -1; i >= 0; i--) {
        if(s[i] == " " && isAfterWord) return count;
        else {
            if (s[i] !== " ") {
                count++;
                isAfterWord = true;
            }
        }
    }

    return count;
};