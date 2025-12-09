var num1 = 10;
var num2 = 20;
var numneg = -15;

// random
console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)

// round 四舍五入
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(4.4)); // Output: 4

// ceil/floor 向上/下取整
console.log(Math.ceil(4.1)); // Output: 5
console.log(Math.floor(4.9)); // Output: 4

// pow 幂运算
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.pow(500, 200)); // Output: very large number, then INF

// sqrt 平方根
console.log(Math.sqrt(16)); // Output: 4
console.log(Math.sqrt(20)); // Output: 4.47213595499958
console.log(Math.sqrt(-4)); // Output: NaN

// abs 绝对值
console.log(Math.abs(numneg)); // Output: 15

// max/min 最大/最小值
console.log(Math.max(num1, num2, numneg)); // Output: 20
console.log(Math.min(num1, num2, numneg)); // Output: -15

var arr = [5, 10, 2, 8, 3];
console.log(Math.max(...arr)); // Output: 10
console.log(Math.min(...arr)); // Output: 2

// Constants
console.log(Math.PI); // Output: 3.141592653589793
console.log(Math.E);  // Output: 2.718281828459045
console.log(Math.SQRT2); // Output: 1.4142135623730951
console.log(Math.LN2);   // Output: 0.6931471805599453
console.log(Math.LN10);  // Output: 2.302585092994046
console.log(Math.LOG2E); // Output: 1.4426950408889634
console.log(Math.LOG10E);// Output: 0.4342944819032518  

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInt(3, 10));