/*
168. Excel Sheet Column Title
注意Z需要特殊处理就行了，因为Z代表26而不是0
*/
var convertToTitle = function(columnNumber) {
    let ans = '';
    while (columnNumber > 0) {
        let remainder = columnNumber % 26;
        if (!remainder) {
            ans = 'Z' + ans;
            columnNumber = columnNumber/26 -1;
        }
        else {
            ans = String.fromCharCode(64+remainder) + ans;
            columnNumber = Math.trunc(columnNumber/26);
        }
    }
    
    return ans;
};