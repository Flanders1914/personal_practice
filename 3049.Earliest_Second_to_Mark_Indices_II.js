/**
3049. Earliest Second to Mark Indices II
和3048一样的二分嵌套贪心
但这个贪心很难：
我们需要一个最小堆，储存哪些nums中的元素被我们归零
归零一个元素要满足一下几个要求：
1. 本身不能是0
2. 之后有可用天用于将该元素标记
3. 最好是第一个出现的changeIndices[i]

我们还希望尽可能归零较大的nums元素

所以：
我们需要一个最小堆储存归零的元素
我们需要从右往左向最小堆中添加元素
我们要保证最小堆的大小(储存元素的数量)不能大于剩余天数的一半
我们先标记出哪些changeIndices元素是首次出现的元素，只在考虑这些元素
这样能做到最优化分布

跳过所有非首次出现的changeIndices元素
如果最小堆有可用空间当前changeIndices元素对应的nums入堆
若无可用空间比较堆顶和当前changeIndices对应的nums元素大小，大的入堆

最后堆中元素被归零
我们计算出我们标记所有nums使用的天数 和 我们拥有的天数，结果返回给外层二分查找
 */


function heapfy_up(heap, current) {
   if (current == 1) return;
   let parent = current >> 1;
   if (heap[current] < heap[parent]) {
      [heap[parent], heap[current]] = [heap[current], heap[parent]];
      heapfy_up(heap, parent);
   } 
}

function heapfy_down(heap, current) {
   let left = current << 1;
   let right = (current << 1) +1;
   let min = current;
   if (left < heap.length && heap[left] < heap[min]) min = left;
   if (right < heap.length && heap[right] < heap[min]) min = right;
   if (min != current) {
      [heap[min], heap[current]] = [heap[current], heap[min]];
      heapfy_down(heap, min);
   }
}

function heap_pop(heap) {
   [heap[1], heap[heap.length-1]] = [heap[heap.length-1], heap[1]];
   heap.pop();
   heapfy_down(heap, 1);
}

function heap_push(heap, num) {
   heap.push(num);
   heapfy_up(heap, heap.length-1);
}



var earliestSecondToMarkIndices = function(nums, changeIndices) {
   
   const search = function(ceil) { 
      let heap = [0];
      let set = new Set();
      let is_first = new Array(ceil).fill(false);
      for (let i = 0; i <= ceil-1; i++) {
         if (set.has(changeIndices[i])) continue;
         else {
            set.add(changeIndices[i]);
            is_first[i] = true;
         }
      }

      for (let i = ceil-1; i >= 0; i--) {
         let max_size = (ceil-i+1) >>1;
         if (nums[changeIndices[i]-1] == 0) continue;
         if (is_first[i] == false) continue;
         if (heap.length-1 < max_size) {
            heap_push(heap, nums[changeIndices[i]-1]);
            continue;
         } else {
            if (heap[1] < nums[changeIndices[i]-1]) {
               heap_pop(heap);
               heap_push(heap, nums[changeIndices[i]-1]);
               continue;
            }
         }
      }
      
      let days_on_hand = ceil+1 - heap.length +1;
      let days_need = nums.length;
      for (let num of nums) days_need += num;
      for (let i = 1; i <= heap.length-1; i++) {
         days_need -= heap[i];
      }

      if (days_need > days_on_hand) return -1;
      else return 1;
   }


   let r = changeIndices.length-1;
   let l = nums.length-1;
   if (search(r) == -1) return -1;

   while (l < r) {
      let mid = (l+r) >> 1;
      let res = search(mid);
      if (res == -1) {
         l = mid+1;
      } else {
         r = mid;
      }
   }

   return l+1;
};

console.log(earliestSecondToMarkIndices([100,2,2,2], [1,1,1,1,1,1,1,2,3,4]));
console.log(earliestSecondToMarkIndices([2,2], [1,2,1,1]));
console.log(earliestSecondToMarkIndices([8,6,5,9,5,3,4,2,5,1,6], [10,10,10,8,3,3,5,3,3,11,5,2,2,2,5,2,9,7,5,8,4,10,7,6,1,6]));

