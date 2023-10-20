/**
210. Course Schedule II
思路和207一致，只不过这里需要记录course的完成顺序
 */
function Node(num) {
    this.num = num;
    this.next = [];
    this.prerequisitesNum = 0;
}

var findOrder = function(numCourses, prerequisites) {
    let cache = new Map();
    for (let i = 0; i <= numCourses-1; i++) {
        let node = new Node(i);
        cache.set(i, node);
    }
    for (let pair of prerequisites) {
        let current = cache.get(pair[0]);
        let target = cache.get(pair[1]);
        current.prerequisitesNum++;
        target.next.push(current);
    }
    
    let finishedCourse = [];
    let order = [];
    for (let i = 0; i <= numCourses-1; i++) {
        let current = cache.get(i);
        if (current.prerequisitesNum == 0) {
            finishedCourse.push(current);
            order.push(i);
        }
    }

    while (finishedCourse.length > 0) {
        let new_finished = [];
        for (let current of finishedCourse) {
            for (let next of current.next) {
                next.prerequisitesNum--;
                if (next.prerequisitesNum == 0) {
                    order.push(next.num);
                    new_finished.push(next);
                }
            }
        }
        finishedCourse = new_finished;
        if (order.length == numCourses) return order;
    }
    if (order.length == numCourses) return order;
    else return [];
};
let  numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]];
console.log(findOrder(numCourses, prerequisites));
