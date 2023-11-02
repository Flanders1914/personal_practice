/**
218. The Skyline Problem
基本思路：
将每个房子的前后点储存到points中，信息包括点的位置，高度（正负号代表是前还是后），和属于哪个房子（用于前后对应）
points按照位置从左到右排序，利用一个最大heap，遇到前点，将高度储存到heap中，遇到后点从后点删除高度
每次变化判断当前最高高度是否和之前不一致，若是则该点为需要储存的拐点
难点：1.相同房子的高度相邻，轮廓线合并成一条线，我们通过比较points[i] 与points[i-1]的位置，l两者位置相同则
不更新current
难点：2.将时间复杂度降到O(nlogn) 需要实现在O(1)时间内查询到特定房子在heap里储存的高度
方法：heap存储一个包括高度和在房子号码的对象， 利用map设置房子到heap中对象的坐标的的映射，每次交换heap单元格
更新map的坐标映射
 */
var getSkyline = function(buildings) {
    let heap = [];
    let heapfy_up = function(heap, child) {
        if (child == 0) return; 
        let parent = (child-1) >> 1;
        if (heap[parent].height < heap[child].height) {
            let temp = heap[parent];
            heap[parent] = heap[child];
            heap[child] = temp;
            hash.set(heap[parent].sign, parent);
            hash.set(heap[child].sign, child);
            heapfy_up(heap, parent);
        }
        return;
    };
    let heapfy_down = function(heap, parent) {
        let left = parent*2 +1;
        let right = parent*2 +2;
        let temp = parent;
        if (right <= heap.length-1 && heap[right].height > heap[temp].height) temp = right;
        if (left <= heap.length-1 && heap[left].height > heap[temp].height) temp = left;
        if (temp != parent) {
            let tempo = heap[temp];
            heap[temp] = heap[parent];
            heap[parent] = tempo;
            hash.set(heap[temp].sign, temp);
            hash.set(heap[parent].sign, parent);
            heapfy_down(heap, temp);
        }
    };

    let points = [];
    let candid = [];
    let previous = 0;
    let hash = new Map();
    for (let i= 0; i <= buildings.length -1; i++) {
        points.push([buildings[i][0], i, buildings[i][2]]);
        points.push([buildings[i][1], i, -buildings[i][2]]);
    }
    points.sort((a , b) => a[0] - b[0]);
    for (let i = 0; i <= points.length -1; i++) {
        let point = points[i];
        let current = previous;
        if (point[2] > 0) {
            // 开始的点
            let node = {height : point[2], sign : point[1]};
            heap.push(node);
            hash.set(point[1], heap.length-1);
            heapfy_up(heap, heap.length-1);
            if (points[i][0] != points[i+1][0]) current = heap[0].height;
        } else {
            //结束的点
            let target = hash.get(point[1]);
            heap[target] = heap.at(-1);
            hash.set(heap[target].sign, target);
            heap.pop();
            heapfy_down(heap, target);
            if (i < points.length-1 && points[i][0] == points[i+1][0]) continue;
            else current = (heap.length == 0)? 0 : heap[0].height;
        }
        if (current != previous ) {
            candid.push([point[0], current]);
            previous = current;
        }
    }
    return candid;  
};
for (let node of getSkyline([[3,7,8],[3,8,7],[3,9,6],[3,10,5],[3,11,4],[3,12,3],[3,13,2],[3,14,1]])) console.log(node);