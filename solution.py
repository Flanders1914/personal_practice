class Solution:
    def countAndSay(self, n: int) -> str:
        def helper(n):
            if n == 1:
                return "1"
            rle = helper(n - 1)
            stack = []
            i = 0
            while i < len(rle):
                count = 0
                while i + 1 < len(rle) and rle[i + 1] == rle[i]:
                    count += 1
                    i += 1
                stack.append(str(count + 1))
                stack.append(rle[i])
                i += 1
            return "".join(stack)
        return helper(n)
