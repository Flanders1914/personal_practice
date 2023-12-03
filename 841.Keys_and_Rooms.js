/**
841. Keys and Rooms
思路：BFS
注意检查每个room是否进去过
 */
var canVisitAllRooms = function(rooms) {
    let count = rooms.length-1;
    let cache = new Set(rooms[0]); // 用set排除重复的room
    let visited = new Set([0]);
    while (cache.size) {
        let next = new Set();
        for (let room of cache) {
            if (visited.has(room)) continue; // 跳过已经进去过的room,写在下面会造成同一迭代内后面visit的room被放入next中
            count--;
            visited.add(room);
            for (let key of rooms[room]) {
                next.add(key);
            }
        }
        cache = next;
    }
    if (count == 0) return true;
    else return false;
};
console.log(canVisitAllRooms([[1],[2],[3],[]]));