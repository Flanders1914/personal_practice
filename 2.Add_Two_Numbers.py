num_a = [int(n) for n in input().split()]
num_b = [int(n) for n in input().split()]
len_a = len(num_a)
len_b = len(num_b)
ans = []
if len_b > len_a:
    num_a, num_b = num_b, num_a
    len_b, len_a = len_a, len_b

k = 0
for i in range(0, len_a):
    if i <= len_b - 1:

        m = num_a[i] + num_b[i] + k
        if m >= 10:
            k = 1
            ans = ans + [m % 10]
        else:
            ans = ans + [m]
            k = 0

    else:

        m = num_a[i] + k
        if m >= 10:
            k = 1
            ans = ans + [m % 10]
        else:
            ans = ans + [m]
            k = 0

if k == 1:
    print(ans + [1])
else:
    print(ans)