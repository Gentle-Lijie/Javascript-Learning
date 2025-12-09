function fn() {
    console.log("This is a function");
}

fn();

var add = function (a, b) {
    return a + b;
};

console.log("Sum of 3 and 5 is:", add(3, 5));

function factorial(num) {
    var total = 1;
    for (var i = 1; i <= num; i++) {
        total *= i;
    }
    return total;
}

console.log("Factorial of 5 is:", factorial(5));
console.log("Factorial of 7 is:", factorial(7));

var multiply = (x, y) => x * y;
/* function mul(x,y){return x*y;} */

// Recursion

function factorialRec(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorialRec(n - 1);
}

console.log("Recursive Factorial of 5 is:", factorialRec(5));
console.log("Recursive Factorial of 7 is:", factorialRec(7));

function fib(n) {
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log("Fibonacci of 6 is:", fib(6));
console.log("Fibonacci of 8 is:", fib(8));