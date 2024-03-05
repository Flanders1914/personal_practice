/**
1750. Minimum Length of String After Deleting Similar Ends
思路：水题
注意一开始处理 l == r 的情况
 */
var minimumLength = function(s) {
   let l = 0;
   let r = s.length-1;
   if (l == r) return 1; 

   while (s[l] == s[r]) {
      while ((l < s.length)&&(s[l] == s[++l]));
      while ((r >= 0)&&(s[r] == s[--r]));
      if (l == r) return 1;
      else if (l > r) return 0;
   }

   return r-l+1;
};