import os


class Solution:
    def answer(self, a: int, b: int) -> int:
        return a + b


a = 5
b = 5
s = Solution()
assert s.answer(a, b) == a + b
