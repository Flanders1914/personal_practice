/**
240. Search a 2D Matrix II
思考复杂了结果用分治法的速度完全比不过一层一层用二分查找
不过这里的分治法没有完全优化好
这破题用一层层的一维二分做速度>98%
/*
var searchMatrix = function(matrix, target) {
    let search = function(matrix, i, j, n, m, target) {
        if (matrix[i][j] > target || matrix[n][m] < target) return false;
        if (matrix[i][j] == target) return true;    
        if (i == n) {
            let l = j, r = m;
            while (l < r) {
                let mid = (l + r) >> 1;
                if (mid == l) {
                    if (matrix[i][l] == target || matrix[i][r] == target) return true;
                    else return false;
                }
                if (matrix[i][mid] == target) return true;
                else if (matrix[i][mid] > target) r = mid;
                else l = mid;
            }
            return false;
        }
        if ( j == m) {
            let l = i, r = n;
            while (l < r) {
                let mid = (l + r) >> 1;
                if (mid == l) {
                    if (matrix[l][j] == target || matrix[r][j] == target) return true;
                    else return false;
                }
                if (matrix[mid][j] == target) return true;
                else if (matrix[mid][j] > target) r = mid;
                else l = mid;
            }
            return false;
        }
        let mid_i = (i + n) >> 1, mid_j = (j + m) >> 1;
        while (matrix[mid_i][mid_j] > target) {
            mid_i = (i + mid_i) >> 1;
            mid_j = (j + mid_j) >> 1;
        }
        if (matrix[mid_i][mid_j] == target) return true;
        else {
            if (search(matrix, i, mid_j+1, mid_i, m, target) ||
            search(matrix, mid_i+1, j, n, m, target)) return true;
            else return false;
        }
    };
    return search(matrix, 0, 0, matrix.length-1, matrix[0].length-1, target);
};
*/
var searchMatrix = function(matrix, target) {
    while (matrix.length > 0) {
        let nums = matrix.pop();
        if (target < nums[0]) continue;
        if (target > nums.at(-1)) return false;
        let l = 0, r = nums.length -1;
        while (l <= r) {
            let mid = (l + r) >> 1;
            if (mid == l) {
                if (nums[l] == target || nums[r] == target) return true;
                else break;
            }
            if (nums[mid] == target) return true;
            else if (nums[mid] > target) r = mid;
            else l = mid;
        }
    }
    return false;
};
let  matrix =[[1,3,5,7,9],[2,4,6,8,10],[11,13,15,17,19],[12,14,16,18,20],[21,22,23,24,25]], target = 13;
console.log(searchMatrix(matrix, target));