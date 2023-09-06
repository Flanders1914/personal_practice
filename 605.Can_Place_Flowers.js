/*
605. Can Place Flowers
思路：用2来填充因为adjacent而无法种花的点
*/
var canPlaceFlowers = function(flowerbed, n) {
    let max_flower = 0;
    for (let i = 0; i <= flowerbed.length-1; i++) {
        if (flowerbed[i] == 0 && (i == flowerbed.length-1 || flowerbed[i+1] == 0)) {
            max_flower++;
            if (i <= flowerbed.length-2) flowerbed[i+1] = 2;
        }
        else if (flowerbed[i] == 1) {
            if (i <= flowerbed.length-2) flowerbed[i+1] = 2;
        }
    }
    if (max_flower >= n) return true;
    else return false;
};