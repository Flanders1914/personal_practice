/**
207. Course Schedule
思路：构造了一个多向图的数据结构
每个node代表一个课程，并记录所需的prerequisite和完成该课程解锁的新课程next，以及prerequisite的数量
从不需要先修课的课程开始，利用宽度优先搜索遍历出所有可以完成的课程
其实node的prerequisite在这里不需要记录
 */
function Node(num) {
    this.num = num;
    this.prerequisites = [];
    this.next = [];
    this.prerequisitesNum = 0;
}

var canFinish = function(numCourses, prerequisites) {
    let cache = new Map();
    for (let i = 0; i <= numCourses-1; i++) {
        let node = new Node(i);
        cache.set(i, node);
    }
    for (let pair of prerequisites) {
        let current = cache.get(pair[0]);
        let target = cache.get(pair[1]);
        current.prerequisites.push(target);
        current.prerequisitesNum++;
        target.next.push(current);
    }
    
    let finishedCourse = [];
    let leftCourseNum = numCourses;
    for (let i = 0; i <= numCourses-1; i++) {
        let current = cache.get(i);
        if (current.prerequisitesNum == 0) {
            finishedCourse.push(current);
            leftCourseNum--;
        }
    }

    while (finishedCourse.length > 0) {
        let new_finished = [];
        for (let current of finishedCourse) {
            for (let next of current.next) {
                next.prerequisitesNum--;
                if (next.prerequisitesNum == 0) {
                    leftCourseNum--;
                    new_finished.push(next);
                }
            }
        }
        finishedCourse = new_finished;
        if (leftCourseNum == 0) return true;
    }

    if (leftCourseNum == 0) return true;
    else return false;
};
let numCourses = 2, prerequisites = [[1,0],[0,1]];
console.log(canFinish(numCourses, prerequisites));
