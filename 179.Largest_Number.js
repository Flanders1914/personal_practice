/**
179. Largest Number
思路：将数字按照特殊规则排序
规则如下
将两个数字字符化，按照字典顺序比较a+b 和 b+a
+这里是连接字符串
a+b大 则 a > b 
b+a大 则 b < a
由于需要递减排序所以a > b 返回 -1
注意：
[0,0,0] 不能输出 '000'
 */
var largestNumber = function(nums) {
    let Compare = function(a,b) {
        let i = 0;
        let a_b = a+b;
        let b_a = b+a;
        while (i <= a_b.length-1) {
            if (a_b[i] > b_a[i]) return -1;
            else if (a_b[i] < b_a[i]) return 1;
            i++;
        }
        return 1;
    };

    let arr_str = [];
    for (let num of nums) {
        arr_str.push(String(num));
    }
    arr_str.sort((a,b) => Compare(a,b));

    let ans = '';
    for (let str of arr_str) {
        ans += str;
    }
    let is_empty = true;
    for (let s of ans) {
        if (s != '0') {
            is_empty = false;
            break;
        }
    }
    if (is_empty) return '0';
    else return ans;
};

console.log(largestNumber([432,43243]));