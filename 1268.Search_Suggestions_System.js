/**
1268. Search Suggestions System
思路：利用字典树，但这道题好像不用字典树也能做而且时间复杂度更低
 */
function getSuggestions(pre, current, k) {
    let res = [];
    let code_a = 'a'.charCodeAt(0);
    const search = function(current) {
        if (k == 0) return;
        if (current.flag) {
            res.push(pre.join(''));
            k--;
        }
        for (let i = 0; i <= 25; i++) {
            let key = String.fromCharCode(code_a+i);
            if (!current[key]) continue;
            pre.push(key);
            search(current[key]);
            pre.pop();
        }
    };
    search(current, k);
    return res;
}

var suggestedProducts = function(products, searchWord) {
    const root = {flag : false};
    for (let product of products) {
        let current = root;
        for (let c of product) {
            if (current[c]) current = current[c];
            else {
                current[c] = {flag : false};
                current = current[c];
            }
        }
        current.flag = true;
    }
    let res = [];
    current = root;
    let pre = [];
    for (let c of searchWord) {
        if (!current[c]) {
            current = {};
            res.push([]);
        } else {
            current = current[c];
            pre.push(c);
            res.push(getSuggestions(pre, current, 3));
        }
    }
    return res;
};
let products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse";
for (let row of suggestedProducts(products, searchWord)) console.log(row);