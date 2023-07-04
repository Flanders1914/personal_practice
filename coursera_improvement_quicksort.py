import random


def partition_same(a, l, r):
    """
    This function partitions the array 'a' into two parts: elements equal to 'x' and elements greater than 'x'.
    It selects the leftmost element 'x' as the pivot and moves all elements equal to 'x' to its left side.
    
    Parameters:
    a (list): The input list to be partitioned.
    l (int): The starting index of the partition.
    r (int): The ending index of the partition.
    
    Returns:
    j (int): The index of the rightmost element equal to 'x'.
    """
    x = a[l]
    j = l
    for i in range(l + 1, r + 1):
        if a[i] == x:
            j += 1
            a[j], a[i] = a[i], a[j]
    return j


def partition(a, l, r, m):
    """
    This function partitions the array 'a' into two parts: elements less than or equal to 'x' and elements greater than 'x'.
    It selects the element 'x' at index 'm' as the pivot and moves all elements less than or equal to 'x' to its left side.
    Besides, m is the index of the rightmost element equal to the selected pivot.
        
    Parameters:
    a (list): The input list to be partitioned.
    l (int): The starting index of the partition.
    r (int): The ending index of the partition.
    m (int): The index of the pivot element.
        
    Returns:
    tuple: A tuple containing the indices (m_l, m_r) representing the partitioned range.
    """
    x = a[m]
    j = m
    for i in range(m + 1, r + 1):
        if a[i] <= x: # 选出所有小于等于pivot的元素并放置于m+1到J的区间
            j += 1
            a[i], a[j] = a[j], a[i]
    # 将m+1到j的元素移动至左侧,在整个过程中，和pivot相等的元素不断向右移动，从l到m移动至k到j
    # k即为m_l; j即为m_r
    k = l 
    for i in range(m + 1,j + 1):
        a[i], a[k] = a[k], a[i]
        k += 1
    return (k, j)


def randomized_quick_sort(a, l, r):
    """
    This function implements the randomized quicksort algorithm to sort the given list 'a' in ascending order.
    
    Parameters:
    a (list): The input list to be sorted.
    l (int): The starting index of the subarray to be sorted.
    r (int): The ending index of the subarray to be sorted.
    """
    if l >= r:
        return
    k = random.randrange(l, r) # Randomly select a pivot index
    a[l], a[k] = a[k], a[l] # Swap pivot element with the leftmost element
    m= partition_same(a, l, r) # Partition the array based on equal elements
    m_l, m_r = partition(a, l, r, m) # Partition the array based on less than or equal to pivot

    # Recursive calls to sort the subarrays
    randomized_quick_sort(a, l, m_l - 1) 
    randomized_quick_sort(a, m_r + 1, r)


if __name__ == '__main__':
    n = int(input())
    a = [int(i) for i in input().split()]
    randomized_quick_sort(a, 0, n - 1)
    for x in a:
        print(x, end=' ')
