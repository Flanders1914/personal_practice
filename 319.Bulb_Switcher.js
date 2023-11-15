/**
319. Bulb Switcher
思路：本质上是数学题，对于灯泡i, 我们已知其在开始为on
之后当i为k的倍数时被toggle, 因此相当于对于i的所有因数
1...i 在1时为on 之后每个因数toggle，由于如果该因数如果不是i的平方根
那么因数总是成对出现最后在 k==i 时被关闭，所以原题相当于寻找所有小于等于n的平方数
 */
var bulbSwitch = function(n) {
    let res = 0;
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) res++;
    return res;
};