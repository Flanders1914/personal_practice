# a randomized quicksort
import random

def QuickSort(l, r, arr):

    if r <= l:
        return

    pivot_index = random.randrange(l, r + 1)
    arr[l], arr[pivot_index] = arr[pivot_index], arr[l]
    j = l

    for i in range(l + 1, r + 1):
        if arr[i] <= arr[l]:
            j += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[j], arr[l] = arr[l], arr[j]
    QuickSort(l, j - 1, arr)
    QuickSort(j + 1, r, arr)
    return arr

if __name__ == '__main__':
    arr = [int(num) for num in input().split()]
    QuickSort(0, len(arr)-1, arr)
    print(arr)