/**
443. String Compression
思路：利用splice函数，splice函数若 start >= array.length 视为在尾部添加元素
注意在结尾处最后的pre和count也需要添加
 */
var compress = function(chars) {
    let pre = chars[0];
    let count = 0;
    let index = 0;
    while (index <= chars.length-1) {
        if (pre == chars[index]) {
            count++;
            chars.splice(index, 1);
        } else {
            chars.splice(index, 0, pre);
            index++;
            if (count == 1) {
                pre = chars[index];
                count = 0;
                continue;
            }
            let num = ('' + count).split('');
            chars.splice(index, 0, ...num);
            index += num.length;
            pre = chars[index];
            count = 0;
            continue;
        }
    }
    chars.splice(index, 0, pre);
    index++;
    if (count > 1) {
        let num = ('' + count).split('');
        chars.splice(index, 0, ...num);
    }
    return chars.length;
};
let chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];
compress(chars);
console.log(chars);