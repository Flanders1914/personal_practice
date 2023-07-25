/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dic = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M :1000
    };

    let ans = 0;
    let last_c ='';

    for (let c of s) {

        if (last_c == '') {
            last_c = c;
        } else if (dic[last_c] >= dic[c]) {
            ans += dic[last_c];
            last_c = c;
        } else {
            ans = ans - dic[last_c];
            last_c = c;
        }

    }
    
    return ans + dic[last_c];
};

console.log(romanToInt("III"));