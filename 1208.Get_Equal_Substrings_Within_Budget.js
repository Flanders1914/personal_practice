/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    const getCost = (i) => Math.abs(s.charCodeAt(i)-t.charCodeAt(i));
    let l = 0, r = 0;
    let cost = 0;

    while (getCost(l) > maxCost) {
        l++;
        r++;
    }

    while (r < s.length && cost + getCost(r) <= maxCost) {
        cost += getCost(r);
        r++;
    }

    let res = r - l;

    while (l < s.length && r < s.length) {
        if (getCost(r) > maxCost) {
            r++;
            l = r;
            cost = 0;
            continue;
        }
        cost -= getCost(l);
        l++;
        while (r < s.length && cost + getCost(r) <= maxCost) {
            cost += getCost(r);
            r++;
        }
        res = Math.max(res, r-l);
    }

    return res;
};

let s = "krpgjbjjznpzdfy";
let t = "nxargkbydxmsgby";
console.log(equalSubstring(s, t, 14));