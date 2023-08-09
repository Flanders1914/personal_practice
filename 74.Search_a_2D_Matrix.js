/*
74. Search a 2D Matrix
要求时间复杂度是O(log(m*n)) 所以理论上必须对行和列都用二分查找
也可以通过坐标转换把二维矩阵转换为一维数组进行二分查找(这种方法应该简单一点)
下面的方法分别对行和列进行了二分查找：
对行，要求找到目标行 target_row 使得 matrix[target_row][0] < target 同时
matrix[target_row +1][0] > target
对列就是简单的二分查找

主要的注意点在程序内添加了注释
*/
var searchMatrix = function(matrix, target) {
    // find the row target might in
    let l = 0, r = matrix.length -1, target_row;

    while (l < r) {
        let mid = Math.floor((l+r)/2);
        if (matrix[mid][0] == target) return true;
        else if (matrix[mid][0] < target) {
            // target 可能在 mid 和 mid 之后的行中
            l = mid;
            // 先判断target是不是在r行范围内，若不是r必须左移一位避免可能的死循环
            if (matrix[r][0] < target) {
                l = r;
                break;
            }
            else if (matrix[r][0] > target) {
                r--;
            } else return true;
        }
        else {
            // target 在 mid 之前的行中
            r = mid;
        }
    }

    target_row = l;

    // 在target row 中二分查找
    if (matrix[target_row].at(-1) < target) return false;
    l = 0, r = matrix[0].length -1;
    while (l <= r) {
        let mid = Math.floor((l+r)/2);
        if (matrix[target_row][mid] < target) l = mid + 1;
        else if (matrix[target_row][mid] > target) {
            r = mid -1;
        } 
        else return true;
    }

    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]]))