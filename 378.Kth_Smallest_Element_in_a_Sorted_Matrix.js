/**
378. Kth Smallest Element in a Sorted Matrix
利用堆的解 时间复杂度 O(klogn)
用二分查找法每次确定比固定一个数小的数的数量会快很多
 */
function Node(n) {
    this.val = n;
}

var kthSmallest = function(matrix, k) {
    let heap = [];
    let heapfy_up = function(root) {
        if (root == 0) return;
        let parent = (root -1) >> 1;
        if (heap[root].val < heap[parent].val) {
            let temp = heap[root];
            heap[root] = heap[parent];
            heap[parent] = temp;
            heapfy_up(parent);
        }
    };
    let heapfy_down = function(root) {
        let left = root*2 +1;
        let right = root*2 +2;
        let min = root;
        if (left <= heap.length-1 && heap[left].val < heap[min].val) min = left;
        if (right <= heap.length-1 && heap[right].val < heap[min].val) min = right;
        if (min != root) {
            let temp = heap[min];
            heap[min] = heap[root];
            heap[root] = temp;
            heapfy_down(min);
        }
    };
    let hash = new Set();
    hash.add(`${0}-${0}`);
    let node = new Node(matrix[0][0]);
    node.i = 0;
    node.j = 0;
    heap.push(node);
    res = 0
    let count = 0;
    while (count < k) {
        res = heap[0].val;
        count++;
        if (count == k) return res;
        let i = heap[0].i;
        let j = heap[0].j;
        let temp = heap.at(-1);
        heap[heap.length-1] = heap[0];
        heap[0] = temp;
        heap.pop();
        if (heap.length > 0) heapfy_down(0);
        if (i < matrix.length-1 && !hash.has(`${i+1}-${j}`)) {
            let node = new Node(matrix[i+1][j]);
            node.i = i+1;
            node.j = j;
            hash.add(`${i+1}-${j}`);
            heap.push(node);
            heapfy_up(heap.length-1);
        }
        if (j < matrix[0].length-1 && !hash.has(`${i}-${j+1}`)) {
            let node = new Node(matrix[i][j+1]);
            node.i = i;
            node.j = j+1;
            hash.add(`${i}-${j+1}`);
            heap.push(node);
            heapfy_up(heap.length-1);
        }
    }
};
let  matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8;
console.log(kthSmallest(matrix, k));