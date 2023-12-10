/**
500. Keyboard Row
注意大写也算
 */
var findWords = function(words) {
    let row1 = new Set("qwertyuiopQWERTYUIOP");
    let row2 = new Set("asdfghjklASDFGHJKL");
    let row3 = new Set("zxcvbnmZXCVBNM");
    let res = [];
    outer: for (let word of words) {
        let token = 0;
        if (row1.has(word[0])) token = 1;
        else if (row2.has(word[0])) token = 2;
        else if (row3.has(word[0])) token = 3;
        for (let c of word) {
            if (token == 1) {
                if (!row1.has(c)) continue outer;
            } else if (token == 2) {
                if (!row2.has(c)) continue outer;
            } else {
                if (!row3.has(c)) continue outer;
            }
        }
        res.push(word); 
    }
    return res;
};
console.log(findWords(["Hello","alaska","Dad","Peace"]));