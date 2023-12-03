/**
1466. Reorder Routes to Make All Paths Lead to the City Zero
思路：从中心（能到达0的点）向边缘转换，BFS
使用两个hash表存储映射关系
 */
var minReorder = function(n, connections) {
    let res = 0;
    let map1 = new Map();
    let map2 = new Map();
    let visited = new Set([0]);
    let perimeter = [0];
    for (let connection of connections) {
        if (!map1.has(connection[0])) {
            map1.set(connection[0], [connection[1]]);
        } else map1.get(connection[0]).push(connection[1]);
        if (!map2.has(connection[1])) {
            map2.set(connection[1], [connection[0]]);
        } else map2.get(connection[1]).push(connection[0]);
    }
    while (visited.size < n) {
        let next = [];
        for (let room of perimeter) {
            if (map2.has(room)) {
                for (let val of map2.get(room)) {
                    next.push(val);
                    visited.add(val);
                }
            }
            if (map1.has(room)) {
                for (let val of map1.get(room)) {
                    if (visited.has(val)) continue;
                    next.push(val);
                    visited.add(val);
                    res++;
                }
            }
        }
        perimeter = next;
    }
    return res;
};
let n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]];
console.log(minReorder(n, connections));