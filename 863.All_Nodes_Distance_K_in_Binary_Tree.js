/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
863. All Nodes Distance K in Binary Tree
思路：先找到从root 到 target 的路径 route
然后沿着路径的每一个点寻找ans
两个函数 findNode 生成 route数组 注意找到target需要立刻返回而不是返回到上一层
search从相应点开始向下寻找对应的层数需要寻找所有的点
 */
var distanceK = function(root, target, k) {
    let route = [];
    if (k == 0) return [target.val];

    let findNode = function(root, target) {
        if (!root) return false;
        route.push(root);
        if (target == root) return true;
        if (findNode(root.left, target)) return true;
        if (findNode(root.right, target)) return true;
        route.pop();
        return false;
    };

    let ans = [];
    findNode(root, target);

    let search = function(root, count) {
        if (root == null) return;
        if (count == 0) ans.push(root.val);
        search(root.left, count-1);
        search(root.right, count-1);
    };

    let count = k;
    for (let i = route.length-1; i >= 0; i--) {
        if (count == 0) {
            ans.push(route[i].val);
            break;
        }
        if (i == route.length-1) {
            search(route[i].left, count-1);
            search(route[i].right, count-1);
        } else {
            if (route[i+1] == route[i].left) {
                search(route[i].right, count-1);
            } else search(route[i].left, count-1);
        }
        count--;
    }
    return ans;
};
let node1 = {val : 1, left : null, right : null};
let node2 = {val : 2, left : null, right : null};
let tree = {val : 0, left : node1, right : node2};

console.log(distanceK(tree, node1, 2));
