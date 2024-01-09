/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
968. Binary Tree Cameras
思路：dp
这道题有两个难点
1.合理表征每个节点的状态和dp公式
2.对初始条件进行赋值

我们需要对每个节点表征三个状态：
1. 该节点放camera 以该节点为根的数需要的最少camera值
2. 该节点不放camera 但该节点能够被camera照到，该节点为根的数需要的最少camera值
3. 该节点不放camera 并且该节点不能够被照到，......
先后以dp1 dp2 dp2 表示

A 当左右子树都存在
dp1 = 1 + 左右子树三个状态各选一个相加的最小值
dp2 = min（左子树dp1 + 右子树dp2, 左子树dp2 + 右子树dp1，左子树dp1 + 右子树dp2)
dp3 = 左子树dp2 + 右子树dp2

B 当只存在一个子树
dp1 = min(下个节点dp1, dp2, dp3)+1
dp2 = 下个节点dp1
dp3 = 下个节点dp2

难点2：初始条件赋值
难点在于叶节点和叶节点的根难以对dp2 和 dp3赋值
这里的解决方法看下面的程序
大致思路是先将无法赋值的状态标记为10000 > 节点数量
 */
var minCameraCover = function(root) {

    const dp = function(root) {
        if (root.left && root.right) {
            let left = dp(root.left);
            let right = dp(root.right);
            let [l1, l2,] = left;
            let [r1, r2,] = right;
            let min1 = Number.MAX_VALUE;
            if (left[1] == 10000) left[1] = 0; // 该节点为叶节点的父节点 由于这里是计算dp1 root会放camera 所以叶节点获得状态dp2 = 0
            if (right[1] == 10000) right[1] = 0; // 同上
            for (let a of left) {
                for (let b of right) {
                    min1 = Math.min(min1, a+b);
                }
            }
            let min2 = Math.min(l1+r2, l2+r1, l1+r1);
            return [min1+1, min2, (l2+r2 > 10000)? 10000 :l2+r2]; // 这里若l2 + r2 > 10000 表明继承了dp2无法赋值的状态，为叶节点的父节点，所以这里dp3 = 10000
        }
        if (root.left || root.right) {
            let next = (root.left)? dp(root.left) : dp(root.right);
            if (next[1] == 10000) return [1, 1, 10000]
            else return [Math.min(...next)+1, next[0], next[1]];
        } else {
            return [1, 10000, 10000]; // 叶节点 dp2 = 10000 dp3 = 10000 均无法赋值
        }
    };

    let res = dp(root);
    return Math.min(res[0], res[1]);
};


let n1 = new TreeNode();
let n2 = new TreeNode();
let n3 = new TreeNode();
let n4 = new TreeNode();
let n5 = new TreeNode();
let n6 = new TreeNode();
let n7 = new TreeNode();
let n8 = new TreeNode();
let n9 = new TreeNode();
let n10 = new TreeNode();
let n11 = new TreeNode();

n1.left = n2;
n1.right = n3;
n3.left =n4;
n4.right = n5;
n2.right = n6;
n6.right = n7;
n7.right = n8;
n8.left = n9;
n9.left = n10;
n9.right = n11;
console.log(minCameraCover(n1));
console.log(1);