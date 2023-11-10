/**
394. Decode String
方法：递归
注意寻找匹配的括号需要考虑嵌套，需要用一个变量count帮助
 */
var decodeString = function(s) {
    let isNum = (c) => {
        return (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57);
    };

    let decoder = function(s, i, j) {
        let res = '';
        let time = 0;
        for (let index = i; index <= j; index++) {
            if (isNum(s[index])) time = time * 10 + Number(s[index]);
            else if (s[index] == '[') {
                let count = 1;
                for (let k = index+1; k <= j; k++) {
                    if (s[k] == '[') count++;
                    if (s[k] == ']') {
                        count--;
                        if (count == 0) {
                            res = res + decoder(s, index+1, k-1).repeat(time);
                            time = 0;
                            index = k;
                            break;
                        }
                    } 
                }
            } else res += s[index];
        }
        return res;
    }
    return decoder(s, 0, s.length-1);
};
console.log(decodeString("3[a2[c]]"));