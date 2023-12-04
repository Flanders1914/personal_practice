/**
1926. Nearest Exit from Entrance in Maze
思路：BFS
注意事项：
1. 对起点进行额外处理，因为起点可能在边缘并且起点在边缘不算终点。
2.对起点做额外处理的好处是对于除了边缘起点外所有非出口点都在边缘内减少了对是否过界的判定步骤
3. 避免next中储存重复的点，因此push一个next就要对该点所在的位置进行处理，避免在next中储存重复的
点导致next的大小超过规定的数据大小
 */
var nearestExit = function(maze, entrance) {
    let [i, j] = entrance;
    maze[i][j] = '+';
    let count = 1;
    let current = [];
    if (i && maze[i-1][j] == '.') {
        maze[i-1][j] = '+';
        current.push([i-1, j]);
    }
    if (i < maze.length-1 && maze[i+1][j] == '.') {
        maze[i+1][j] = '+';
        current.push([i+1, j]);
    }
    if (j && maze[i][j-1] == '.') {
        maze[i][j-1] = '+';
        current.push([i, j-1]);
    }
    if (j < maze[0].length-1 && maze[i][j+1] == '.') {
        maze[i][j+1] = '+';
        current.push([i, j+1]);
    }

    while (current.length) {
        let next = [];
        for (let [i, j] of current) {
            maze[i][j] = '+';
            if (i == 0 || i == maze.length-1 ||
            j == 0 || j == maze[0].length-1) return count;
            if (maze[i-1][j] == '.') {
                maze[i-1][j] = '+';
                next.push([i-1, j]);
            }
            if (maze[i+1][j] == '.') {
                maze[i+1][j] = '+';
                next.push([i+1, j]);
            }
            if (maze[i][j-1] == '.') {
                maze[i][j-1] = '+';
                next.push([i, j-1]);
            }
            if (maze[i][j+1] == '.') {
                maze[i][j+1] = '+';
                next.push([i, j+1]);
            }
        }
        current = next;
        count++;
    }
    return -1;
};
let maze = [[".","+"]], entrance = [0,0];
console.log(nearestExit(maze, entrance));
