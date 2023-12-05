/*
2336. Smallest Number in Infinite Set
思路: 维护一个堆和一个hash表
*/
var SmallestInfiniteSet = function() {
    this.heap = new Array(1000).fill(0);
    for (let i = 0; i <= this.heap.length-1; i++) this.heap[i] = i+1;
    this.set = new Set(this.heap);
    this.heapfyDown = function(heap, current) {
        let left = current*2+1;
        let right = current*2+2;
        let min = current;
        if (left <= heap.length-1 && heap[left] < heap[min]) min = left;
        if (right <= heap.length-1 && heap[right] < heap[min]) min = right;
        if (min != current) {
            [heap[min], heap[current]] = [heap[current], heap[min]];
            this.heapfyDown(heap, min);
        }
    };

    this.heapfyUp = function(heap, current) {
        if (!current) return;
        let parent = (current-1) >> 1;
        if (heap[current] < heap[parent]) {
            [heap[current], heap[parent]] = [heap[parent], heap[current]];
            this.heapfyUp(heap, parent);
        }
    };
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let res = this.heap[0];
    [this.heap[0], this.heap[this.heap.length-1]] =
    [this.heap[this.heap.length-1], this.heap[0]];
    this.heap.pop();
    this.heapfyDown(this.heap, 0);
    this.set.delete(res);
    return res;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (this.set.has(num)) return;
    this.heap.push(num);
    this.heapfyUp(this.heap, this.heap.length-1);
    this.set.add(num);
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */