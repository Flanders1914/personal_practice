/**
502. IPO
思路：最大堆+贪心
堆中放入满足当前w的所有项目
每次取所有堆中项目利润最大的那个
然后更新堆
 */
function Node(profit, capital) {
    this.val = profit;
    this.cost = capital;
}

function heapUp(heap, current) {
    if (current == 0) return;
    let parent = (current-1) >> 1;
    if (heap[current].val > heap[parent].val) {
        [heap[current], heap[parent]] = [heap[parent], heap[current]];
        heapUp(heap, parent);
    }
}
function heapDown(heap, current) {
    let left = current * 2 +1;
    let right = current * 2 +2;
    let max =  current;
    if (left <= heap.length-1 && heap[left].val > heap[max].val) max = left;
    if (right <= heap.length-1 && heap[right].val > heap[max].val) max = right;
    if (current != max) {
        [heap[max], heap[current]] = [heap[current], heap[max]];
        heapDown(heap, max);
    }
}
function heapPop(heap) {
    let res = heap[0].val;
    [heap[0], heap[heap.length-1]] = [heap[heap.length-1], heap[0]];
    heap.pop();
    heapDown(heap, 0);
    return res;
}

var findMaximizedCapital = function(k, w, profits, capital) {
    let nodes = [];
    let heap = [];
    for (let i = 0; i <= profits.length-1; i++) {
        nodes.push(new Node(profits[i], capital[i]));
    }
    nodes.sort((a,b) => a.cost - b.cost);

    let index = 0;
    while (k > 0) {
        while (index <= nodes.length-1 && nodes[index].cost <= w) {
            heap.push(nodes[index]);
            heapUp(heap, heap.length-1);
            index++;
        }
        if (heap.length == 0) return w;
        w += heapPop(heap);
        k--;
    }
    return w;
};
let k = 2, w = 0, profits = [1,2,3], capital = [0,1,1];
console.log(findMaximizedCapital(k,w,profits,capital));