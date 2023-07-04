nums = [int(n) for n in input().split()]
target = int(input())

for i in range(0, len(nums)):
    for j in range(i+1, len(nums)):
        if nums[i] + nums[j] == target:
            print([i,j])