/**
497. Random Point in Non-overlapping Rectangles
思路：先确定在那个矩形中，再确定坐标
注意：我们要通过矩形内整数坐标点的个数来确定相应的比例而非面积
所以 我们需要用 (x-a+1)(y-b+1) 而非 (x-a)(y-b) 来统计
因为点包括了边缘
 */
var Solution = function(rects) {
    this.left_bottom = [];
    this.right_up = [];
    this.area = [];
    this.total = 0;
    for (let [a,b,x,y] of rects) {
        this.left_bottom.push([a,b]);
        this.right_up.push([x,y]);
        this.total += (x-a+1)*(y-b+1);
        this.area.push((x-a+1)*(y-b+1));
    }
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let temp = Math.floor(Math.random()*this.total);
    for (let i = 0; i <= this.area.length-1; i++) {
        if (temp < this.area[i]) {
            let l = this.right_up[i][0] - this.left_bottom[i][0];
            let h = this.right_up[i][1] - this.left_bottom[i][1];
            let x = Math.floor(Math.random()*(l+1)) + this.left_bottom[i][0];
            let y = Math.floor(Math.random()*(h+1)) + this.left_bottom[i][1];
            return [x, y];
        } else {
            temp -= this.area[i];
        }
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
obj = new Solution([[82918473,-57180867,82918476,-57180863],[83793579,18088559,83793580,18088560],[66574245,26243152,66574246,26243153],[72983930,11921716,72983934,11921720]]);
console.log(obj.pick());