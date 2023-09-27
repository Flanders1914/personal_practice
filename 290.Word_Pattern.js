/**
290. Word Pattern
思路：用map建立pattern -> word映射
注意：两个不同的word不能映射同一个pattern的字符
需要用set记录word是否已经建立了映射
 */
var wordPattern = function(pattern, s) {
    let arr1 = pattern.split('');
    let arr2 = s.split(' ');
    let map = new Map();
    let set = new Set();

    if (arr1.length != arr2.length) return false;
    for (let i = 0; i <= arr1.length-1; i++) {
        if (map.has(arr1[i])) {
            if (map.get(arr1[i]) == arr2[i]) continue;
            else return false;
        }
        else {
            if (set.has(arr2[i])) return false;
            map.set(arr1[i], arr2[i]);
            set.add(arr2[i]);
        }
    }
    return true;
};
console.log(wordPattern("abba", "dog cat cat dog"));