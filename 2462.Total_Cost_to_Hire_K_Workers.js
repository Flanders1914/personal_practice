/**
2462. Total Cost to Hire K Workers
思路：利用两个最小堆
难点在于将costs分割且不能出现重复
 */
function heapfy_up(heap, current) {
    if (!current) return;
    let parent = (current-1) >> 1;
    if (heap[current] < heap[parent]) {
        [heap[current], heap[[parent]]] = [heap[parent], heap[current]];
        heapfy_up(heap, parent);
    }
}
function heapfy_down(heap, current) {
    let left = current * 2 +1;
    let right = current * 2 +2;
    let min = current;
    if (left <= heap.length-1 && heap[left] < heap[min]) min = left;
    if (right <= heap.length-1 && heap[right] < heap[min]) min = right;
    if (min != current) {
        [heap[current], heap[min]] = [heap[min], heap[current]];
        heapfy_down(heap, min);
    }
}

var totalCost = function(costs, k, candidates) {
    let heap_l = [];
    let heap_r = [];
    let remain = [];
    for (let i = 1; i <= candidates; i++) {
        if (i-1 > costs.length-i) break; // 保证costs.length 为偶数时不重复
        heap_l.push(costs[i-1]);
        heapfy_up(heap_l, heap_l.length-1);
        if (i-1 == costs.length-i) break; // 保证costs.length 为奇数时不重复
        heap_r.push(costs[costs.length-i]);
        heapfy_up(heap_r, heap_r.length-1);
    }
    for (let i = candidates; i <= costs.length-candidates-1; i++) remain.push(costs[i]);

    let res = 0;
    let i = 0, j = remain.length-1; // i,j标记remain的取值指针

    for (let count = 1; count <= k; count++) {
        let min1 = (heap_l.length > 0)? heap_l[0] : Number.MAX_VALUE;
        let min2 = (heap_r.length > 0)? heap_r[0] : Number.MAX_VALUE;
        if (min1 <= min2) {
            res += min1;
            [heap_l[0], heap_l[heap_l.length-1]] = [heap_l[heap_l.length-1], heap_l[0]];
            heap_l.pop();
            heapfy_down(heap_l, 0);
            if (i <= j) {
                heap_l.push(remain[i]);
                heapfy_up(heap_l, heap_l.length-1);
                i++;
            }
        } else {
            res += min2;
            [heap_r[0], heap_r[heap_r.length-1]] = [heap_r[heap_r.length-1], heap_r[0]];
            heap_r.pop();
            heapfy_down(heap_r, 0);
            if (i <= j) {
                heap_r.push(remain[j]);
                heapfy_up(heap_r, heap_r.length-1);
                j--;
            }
        }
    }
    return res;
};
let costs = [18,64,12,21,21,78,36,58,88,58,99,26,92,91,53,10,24,25,20,92,73,63,51,65,87,6,17,32,14,42,46,65,43,9,75], k = 13, candidates = 23;
console.log(totalCost(costs, k, candidates));