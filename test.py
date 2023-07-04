import heap

nums = [int(n) for n in input().split()]
heap.heapfy(nums)
heap.heap_print(nums, len(nums))
