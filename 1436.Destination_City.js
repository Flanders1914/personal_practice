/**
1436. Destination City
思路：水题
 */
var destCity = function(paths) {
    const map = new Map();
    for (let [a, b] of paths) {
        map.set(a, b);
    }
    let current = paths[0][1];
    while (map.has(current)) {
        current = map.get(current);
    }
    return current;
};
console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]));