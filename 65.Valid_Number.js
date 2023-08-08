/**
65. Valid Number
并不难的题目，但是输入数据需要考虑太多的点，不是个好题目。
如果牺牲运行时间，先用两次遍历找出输入字符串中的'.' 和 'e'/'E'
可能会容易一点
注意： e9 false; .e1 false; +. false; +.8 true; 46.e3 true
 */
var isNumber = function(s) {
    let index = 0, allow_comma = true, must_integer = false;

    if (s.length == 1) {
        if (!Number(s[0]) && s[0] != '0') return false;
    }

    if (s[0] == 'e' || s[0]== 'E') return false;

    if (s[index] == '-' || s[index] == '+') {
        if (s[1] == '.' && s.length == 2) return false;
        if (!Number(s[1]) && s[1] != '0' && s[1] != '.') return false;
        else index++;
    }

    while (index <= s.length -1) {
        if (s[index] == '.' && must_integer == false) {
            if (allow_comma) {
                allow_comma = false;
                index++;
            } else return false;
        }
        else if (s[index] == 'e' || s[index] == 'E') {
            if (must_integer) return false;
            must_integer = true;
            if (index == s.length -1) return false;
            if (s[index -1] == '.') {
                if (index == 1) return false;
                else if (!Number(s[index -2]) && s[index -2] != '0') return false;
            }
            if (s[index +1] == '-' || s[index +1] == '+') {
                if (index == s.length -2 || (!Number(s[index +2]) && s[index +2] !== '0')) return false;
                else {
                    index += 2;
                }
            } else index ++;
        }
        else if (!Number(s[index]) && s[index] !== '0') return false;
        else index++;
        
    }

    return true;
};

console.log(isNumber("46.e3"))