/*
71. Simplify Path
思路：
1. 将字符串转换为数组处理
2. 空元素意味连续的'/'删除即可
3. '.' 代表当前目录，删除即可
4. '..' 代表回到上一层，删除该项和前面一项（若回到根目录，不删除上一项）

注意点：
由于在迭代中删除了数组元素，所以不能用for循环，并且在删除两项后坐标要左移一位
*/

var simplifyPath = function(path) {
    let arr = path.split('/');
    // 由于遍历时删除了数组元素，必须用while循环
    let i = 0;
    while (i <= arr.length -1) {
        if (arr[i] === '') arr.splice(i,1);
        else if (arr[i] === '.') arr.splice(i,1);
        else if (arr[i] === '..') {
            if (i == 0) arr.splice(0,1);
            else {
                arr.splice(i -1, 2);
                i--;
            }
        }
        else i++;
    }

    let ans = '/' + arr.join('/');
    return ans;
};

console.log(simplifyPath('/../'));
