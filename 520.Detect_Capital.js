/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const is_capital = (c) => {
        if ((c.charCodeAt(0) >= 65) && (c.charCodeAt(0) <= 90)) return true;
        else return false;
    }

    if (is_capital(word[0])) {
        if (word.length == 1) return true;
        let temp = is_capital(word[1]);
        for (let i = 2; i <= word.length-1; i++) {
            if (is_capital(word[i]) != temp) return false;
        }
    } else {
        for (let i = 1; i <= word.length-1; i++) {
            if (is_capital(word[i])) return false;
        }
    }

    return true;
};
console.log(detectCapitalUse("LEET"))