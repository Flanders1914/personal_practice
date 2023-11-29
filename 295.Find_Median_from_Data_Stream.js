/*
295. Find Median from Data Stream
思路：最大最小堆
破题之处在于将数据分为两半，较大的一部分放在最小堆中，较小的部分放在最大堆中
addNum时先将num放入对应的堆中在判断两个堆的大小是否最多只相差1，若否维护至两个堆最大只差1
另外在堆维护函数中利用type存储一个boolean变量用于标记维护的大顶堆还是小顶堆，在堆维护函数中利用异或实现维护大顶堆和小顶堆的转换
*/
function heapUp(heap, current, type) { // type == true 最小堆; type == false 最大堆
    if (current == 0) return;
    let parent = (current-1) >> 1;
    if ((heap[parent] < heap[current])^type) {
        [heap[parent], heap[current]] = [heap[current], heap[parent]];
        heapUp(heap, parent, type);
    }
}
function heapDown(heap, current, type) {
    let left = current*2 +1;
    let right = current*2 +2;
    let temp = current;
    if (left <= heap.length-1 && ((heap[left] > heap[temp])^type)) temp = left;
    if (right <= heap.length-1 && ((heap[right] > heap[temp])^type)) temp = right;
    if (temp != current) {
        [heap[current], heap[temp]] = [heap[temp], heap[current]];
        heapDown(heap, temp, type);
    }
}
function heapPop(heap, type) {
    let res = heap[0];
    [heap[0], heap[heap.length-1]] = [heap[heap.length-1], heap[0]];
    heap.pop();
    heapDown(heap, 0, type);
    return res;
}

var MedianFinder = function() { // type == true 最小堆; type == false 最大堆
    this.minHeap = [];
    this.maxHeap = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.minHeap.length == 0) this.minHeap.push(num);
    else if (this.maxHeap.length == 0) {
        this.maxHeap.push(num);
        if (this.maxHeap[0] > this.minHeap[0]) { // 注意this.minHeap中的数要始终比this.maxHeap大
            [this.maxHeap[0], this.minHeap[0]] = [this.minHeap[0], this.maxHeap[0]];
        }
    }
    else {
        if (num < this.minHeap[0]) {
            this.maxHeap.push(num);
            heapUp(this.maxHeap, this.maxHeap.length-1, false);
            if (this.maxHeap.length > this.minHeap.length+1) {
                this.minHeap.push(heapPop(this.maxHeap, false));
                heapUp(this.minHeap, this.minHeap.length-1, true);
            }
        } else {
            this.minHeap.push(num);
            heapUp(this.minHeap, this.minHeap.length-1, true);
            if (this.minHeap.length > this.maxHeap.length+1) {
                this.maxHeap.push(heapPop(this.minHeap, true));
                heapUp(this.maxHeap, this.maxHeap.length-1, false);
            }
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeap.length > this.minHeap.length) return this.maxHeap[0];
    else if (this.maxHeap.length < this.minHeap.length) return this.minHeap[0];
    else return ((this.maxHeap[0]+this.minHeap[0])/2);
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
 var obj = new MedianFinder()
 obj.addNum(1);
 obj.addNum(1);
 console.log(obj.findMedian());
 obj.addNum(3);
 obj.addNum(-1);
 console.log(obj.findMedian());