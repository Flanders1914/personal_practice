import random

def RandomizedQuickSort (nums):
    r = len(nums) - 1
    if r <= 0:
        return nums
    
    pivot_index = random.randrange(0, r + 1 )
    nums[0], nums[pivot_index] = nums[pivot_index], nums[0]

    m = 0
    for i in range(1, r + 1):
        if nums[i] == nums[0]:
            m += 1
            nums[m], nums[i] = nums[i], nums[m]

    leftpart, rightpart = partition (nums, m, r)
    return(RandomizedQuickSort(leftpart) + nums[0:m+1] + RandomizedQuickSort(rightpart))


def partition (arr, m, r):
    pivot = arr[m]
    j = m
    for i in range(m+1, r + 1):
        if arr[i] < pivot:
            j += 1
            arr[j], arr[i] = arr[i], arr[j]
    return (arr[m+1:j+1], arr[j+1:r+1])   

if __name__ == '__main__':
    a = [int(n) for n in input().split()]
    print (RandomizedQuickSort(a))
