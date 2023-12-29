
 function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};

/**
558. Logical OR of Two Binary Grids Represented as Quad-Trees
思路：递归练习
注意当某个squad全是1或0时要将四个单元格合并成一个叶节点
注意quadTree1 和 quadTree2 的结构不一定相同
 */
var intersect = function(quadTree1, quadTree2) {
    let res = new Node(0, false, null, null, null, null);
    if (quadTree1.isLeaf && quadTree2.isLeaf) {
        res.isLeaf = true;
        res.val = quadTree1.val || quadTree2.val;
        return res;
    } else if (quadTree1.isLeaf) {
        if (quadTree1.val == 1) {
            res.isLeaf = true;
            res.val = 1;
            return res;
        }
        res.topLeft = intersect(quadTree1, quadTree2.topLeft);
        res.topRight = intersect(quadTree1, quadTree2.topRight);
        res.bottomLeft = intersect(quadTree1, quadTree2.bottomLeft);
        res.bottomRight = intersect(quadTree1, quadTree2.bottomRight);
    } else if (quadTree2.isLeaf) {
        if (quadTree2.val == 1) {
            res.isLeaf = true;
            res.val = 1;
            return res;
        }
        res.topLeft = intersect(quadTree1.topLeft, quadTree2);
        res.topRight = intersect(quadTree1.topRight, quadTree2);
        res.bottomLeft = intersect(quadTree1.bottomLeft, quadTree2);
        res.bottomRight = intersect(quadTree1.bottomRight, quadTree2);

    } else {
        let topLeft = intersect(quadTree1.topLeft, quadTree2.topLeft);
        let topRight = intersect(quadTree1.topRight, quadTree2.topRight);
        let bottomLeft = intersect(quadTree1.bottomLeft, quadTree2.bottomLeft);
        let bottomRight = intersect(quadTree1.bottomRight, quadTree2.bottomRight);
        if (topLeft.isLeaf && topRight.isLeaf &&
            bottomLeft.isLeaf && bottomRight.isLeaf && (
                topLeft.val == topRight.val && topRight.val == bottomLeft.val && bottomLeft.val == bottomRight.val
            )) {
            res.isLeaf = true;
            res.val = topLeft.val;
        } else {
            res.topLeft = topLeft;
            res.topRight = topRight;
            res.bottomLeft = bottomLeft;
            res.bottomRight = bottomRight;
        }

    }
    return res;
};

let t1 = new Node(1,0);
t1.topLeft = new Node(1,1);
t1.topRight = new Node(1,1);
t1.bottomLeft = new Node(0,1);
t1.bottomRight = new Node(0,1);
let res = intersect(t1, t1);
console.log(res);