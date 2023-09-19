/**
205. Isomorphic Strings
思路：用一个map保存映射关系
由于每一个s和t字符都只能有一种映射关系，用set保存t种字符是否已经建立了映射
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    let map = new Map();
    let set = new Set();
    for (let i = 0; i <= s.length-1; i++) {
        if (map.has(s[i])) {
            if (t[i] == map.get(s[i])) continue;
            else return false;
        }
        else {
            if (set.has(t[i])) return false;
            map.set(s[i], t[i]);
            set.add(t[i]);
        }
    }
    return true;
};