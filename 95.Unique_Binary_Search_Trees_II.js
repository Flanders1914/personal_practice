/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
95. Unique Binary Search Trees II
生成所有可能的BST
思路：
1. 利用递归，函数返回区间[m,n]可能的BST的集合
2. 遍历集合每一个值，设该值为根，利用递归生成左树和右树的集合
然后装到该根上，返回区间可能的BST集合
3. 利用cache避免重复区间的计算
注意：这种方法生成的树是互相纠缠在一起的，因为共享了相同区间的BST集合，若要生成独立的树
需要写个树拷贝函数
*/
var generateTrees = function(n) {
    //设置缓存cache
    const cache = new Map();

    const make_BSTs = function(m, n){
        let trees = [];
        if (m > n) {
            trees.push(null);
            return trees;
        }

        if (cache.has(`${m}-${n}`)) {
            return cache.get(`${m}-${n}`);
        }

        for (let root_val = m; root_val <= n; root_val++) {
            let leftTrees = make_BSTs(m, root_val-1);
            let rightTrees = make_BSTs(root_val + 1, n);

            for (let leftTree of leftTrees) {
                for (let rightTree of rightTrees) {
                    let root = new TreeNode(root_val, leftTree, rightTree);
                    trees.push(root);
                }
            }
        }

        cache.set(`${m}-${n}`, trees);
        return trees;
    }

    return make_BSTs(1, n);
};