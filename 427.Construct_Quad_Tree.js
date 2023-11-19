/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
427. Construct Quad Tree
思路：简单的树构造，难点在于读题，其实不用读题，直接看参考数据即可
 */
var construct = function(grid) {
    let work = function(grid, a, b, n) {
        let isSame = true;
        let val = grid[a][b];
        for (let i = a; i <= a+n-1; i++) {
            for (let j = b; j <= b+n-1; j++) {
                if (grid[i][j] != val) {
                    isSame = false;
                    break;
                }
            }
        }
        if (isSame) {
            return new Node(val, true, null, null, null, null);
        } else {
            let topLeft = work(grid, a, b, n >> 1);
            let topRight = work(grid, a, b+(n >> 1), n >> 1);
            let bottomLeft = work(grid, a+(n >> 1), b, n >> 1);
            let bottomRight = work(grid, a+( n >> 1), b+(n >> 1), n >> 1);
            return new Node(val, false, topLeft, topRight, bottomLeft, bottomRight);
        }
    };
    return work(grid, 0, 0, grid.length);
};