/*
171. Excel Sheet Column Number
非常简单
*/
var titleToNumber = function(columnTitle) {
    let ans = 0;
    for (let i = 0; i <= columnTitle.length-1; i++) {
        ans *= 26;
        ans += columnTitle[i].charCodeAt() -64;
    }
    return ans;
};

console.log(titleToNumber("AB"));