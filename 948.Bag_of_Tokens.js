/**
948. Bag of Tokens
思路：
简单的贪心算法
先将tokens排序
从小到大试图 face-up 增加score
若当前power不足，用一个score从大到小换取power
只要当前l<r,在r换取的power能够在l拿回score
 */
var bagOfTokensScore = function(tokens, power) {
   tokens.sort((a,b) => a-b);
   let res = 0;
   let l = 0, r = tokens.length-1;
   if (power < tokens[l]) return 0;
   while (l <= r) {
      if (power >= tokens[l]) {
         res++;
         power -= tokens[l];
         l++;
      } else {
         if (l == r) return res;
         res--;
         power += tokens[r];
         r--;
      }
   }
   return res;
};

console.log(bagOfTokensScore([81,45,8], 32));