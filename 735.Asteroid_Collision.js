/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    i = 1;
    do {

        if (asteroids[i - 1] > 0 && asteroids[i] < 0) {
            
            if (Math.abs(asteroids[i - 1]) > Math.abs(asteroids[i])) {
                asteroids.splice(i, 1);
            } else if (Math.abs(asteroids[i - 1]) < Math.abs(asteroids[i])) {
                asteroids.splice(i - 1, 1);
                i = i - 1 || i;
            } else {
                asteroids.splice(i - 1, 2);
                i = (i > 1) ? i - 1 : i;
            }

        } else {
            i++
        }

    } while (i <= asteroids.length);

    return (asteroids);
};

console.log(asteroidCollision([1,1,-1,-2]));