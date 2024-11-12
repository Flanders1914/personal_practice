/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

var findOrder = function(numCourses, prerequisites) {
    let set = new Set()
    let graph = new Array(numCourses).fill().map(() => new Array(0))
    let degrees = new Array(numCourses).fill(0)

    for (let item of prerequisites) {
        let key1 = `${item[0]}-${item[1]}`
        let key2 = `${item[1]}-${item[0]}`
        if (set.has(key1)) {
            if (set.has(key2)) {
                return []
            }
        } else {
            set.add(key1)
            if (item[0] == item[1]) return
            (graph[item[1]]).push(item[0])
            degrees[item[0]]++
        }
    }

    let res = []
    let start = -1
    for (let i = 0; i < numCourses; i++) {
        if (degrees[i] == 0) {
            start = i
            break
        }
    }

    for (let count = 0; count < numCourses; count++) {
        if (start == -1) {
            return []
        }
        res.push(start)
        degrees[start] = -1
        for (let index of graph[start]) {
            degrees[index]--
        }
        start = -1
        for (let i = 0; i < numCourses; i++) {
            if (degrees[i] == 0) {
                start = i
                break
            }
        }
    }

    return res
};

let numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
console.log(findOrder(numCourses, prerequisites))