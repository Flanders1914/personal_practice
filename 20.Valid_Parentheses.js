/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    var dic = new Map([
        ["{", "}"],
        ["(", ")"],
        ["[", "]"],
    ]);

    let cache = [];
    for (c of s) {
        if (c == '[' || c == '{' || c == '(') {
            cache.push(c);
        } else {

            if (cache.length == 0) return false;
            let last = cache.pop();
            if (dic.get(last) != c) return false;

        }
    }

    if (cache.length == 0) return true;
    else return false;
};

console.log(isValid("()[]{}"));