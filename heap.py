#该程序包括了堆的初始化，插入，输出，堆排序和堆的打印

def heapfy(a): #初始化一个堆
    for i in range(len(a)//2 -1, -1, -1): # index = len(a)//2-1 的节点为数组内最右侧的非叶节点（最后一个元素的父节点）
        heapfy_down(a, len(a), i)
    return a


def heapfy_down(a, heap_size, parent_index): #向下维护堆(parent——>child)；用作堆输出后的维护
    left = 2 * parent_index +1
    right = 2 *parent_index +2
    largest_child = parent_index

    if (left < heap_size) and ( a[left] > a[parent_index]):
        largest_child = left

    if (right < heap_size) and (a[right] > a[largest_child]):
        largest_child = right

    if largest_child != parent_index:
        #用反斜杠\来将较长的一个段落分为两行
        a[largest_child], a[parent_index] = \
        a[parent_index], a[largest_child]
        heapfy_down(a, heap_size, largest_child)


def heapfy_up(a, child_index): #向上维护堆(child——>parent)；用作堆插入后的维护

    if child_index == 0:
        return

    parent_index = (child_index - 1) // 2

    if a[parent_index] < a[child_index]:
        a[child_index], a[parent_index] = a[parent_index],  a[child_index]
        heapfy_up(a, parent_index)


def heap_insert(a, k):
    a = a + [k]
    heapfy_up(a, len(a)-1)
    return a


def heap_print(a, heap_size): #将堆按层打印
    current_layer = []
    current_layer_number = 0
    k = 1 # k为每一层元素的计数，最左端k=0,最右端k = 2^current_layer_number
    print("___heap___")

    for i in range(0, heap_size):
        if k <= 2 ** current_layer_number:
            current_layer = current_layer + [a[i]]
            k += 1
        else:
            k = 1
            print(current_layer)
            current_layer_number += 1
            current_layer = [a[i]]

    print(current_layer) #打印最后一层
    print("____________")


def heapsort(a):
    a = heapfy(a)
    heap_size = len(a)

    #堆排序原理：根节点与末尾叶节点交换，将堆的规模减一，并维护最大堆（不断输出最大元素到数组右侧）
    for i in range(heap_size - 1, 0, -1):
        a[i], a[0] = a[0], a[i]
        heapfy_down(a, i, 0)

    return a


#测试堆排序和堆的插入
if __name__ == "__main__":

    nums = [int(n) for n in input("Please input an array:\n").split()]
    #将输入数组转化为堆
    arr = heapfy(nums)
    #输出初始堆
    print("This is the initial heap:")
    heap_print(arr, len(arr))

    #将多个数字插入堆中并维护堆，输入print打印堆，输入done完成对堆的更新
    instruction = input("input a number, or input print to print the heap, or input done to finish:\n")
    while instruction != "done":
        if instruction == "print":
            heap_print(arr, len(arr))
        else:
            try:
                insert_number = int(instruction)
                arr = heap_insert(arr, insert_number)
            except(ValueError):
                print('Please input a number, "print" or "done"')
        instruction = input("input a number, or input print to print the heap, or input done to finish:\n")
    
    print("This is the sorted sequence:")
    print(heapsort(arr)) #输出排序过后的数组
