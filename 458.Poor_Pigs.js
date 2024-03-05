/**
458. Poor Pigs
思路：
对于k头猪，m次尝试
我们能够获得(m+1)^k 种不同的情况
因此可以在（m+1)^k 个bucket中找到有毒的那个
对于每个猪，它可以在m次尝试中最多能分辨m+1种情况

或者我们可以制造一个 k位m+1进制数：（若 k = 3, m = 1）
000
001
010
011
100
101
110
111
对应8个bucket
第一个猪喂第一位为1的水桶
第二个猪喂第二位为1的水桶
第三个猪喂第三位为1的水桶

若 k = 2, m = 2
00
01
02
10
11
12
20
21
22
对应9个bucket
00表示从来没用于喂过两个猪
01表示第一个猪在第一次实验喂
02表示第一个猪在第二次实验喂
......
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
   let m = Math.floor(minutesToTest/minutesToDie)+1;
   let n = 1;
   let res = 0;
   while (n < buckets) {
      res++;
      n *= m;
   }
   return res;
};

return console.log(poorPigs(1000, 15, 60));