var num1 = 10;
var num2 = 3;
var boolTrue = Boolean(true);
var boolFalse = Boolean(false);
var str1 = "10";
var str2 = "3";

// Arithmetic Operators
console.log("Addition:", num1 + num2);
console.log("String concatenation:", str1 + str2);
console.log("Boolean addition (true=1, false=0), which is a number :", boolTrue + boolFalse);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Exponentiation:", num1 ** num2);

// Assignment Operators
var a = 5;
console.log("Initial a:", a);
a += 3;
console.log("After a += 3:", a);
a -= 2;
console.log("After a -= 2:", a);
a *= 4;
console.log("After a *= 4:", a);
a /= 2;
console.log("After a /= 2:", a);
a %= 3;
console.log("After a %= 3:", a);
a **= 2;
console.log("After a **= 2:", a);

// Comparison Operators
// Compares only the value, ignoring the type
console.log("num1 == str1:", num1 == str1);   // true
console.log("num1 != str2:", num1 != str2);   // true
console.log("num1 > num2:", num1 > num2);     // true
console.log("num1 < num2:", num1 < num2);     // false
console.log("num1 >= str1:", num1 >= str1);   // true
console.log("num2 <= str2:", num2 <= str2);   // true

// Compares the type as well
console.log("num1 === str1:", num1 === str1); // false
console.log("num1 !== str1:", num1 !== str1); // true

// Logical Operators
console.log("boolTrue && boolFalse:", boolTrue && boolFalse);
console.log("boolTrue || boolFalse:", boolTrue || boolFalse);
console.log("!boolTrue:", !boolTrue);

// Self increment/decrement Operators
var count = 0;
console.log("Initial count:", count);
console.log("Post-increment count++:", count++);
console.log("After post-increment, count:", count);
console.log("Pre-increment ++count:", ++count);
console.log("After pre-increment, count:", count);
console.log("Post-decrement count--:", count--);
console.log("After post-decrement, count:", count);
console.log("Pre-decrement --count:", --count);
console.log("After pre-decrement, count:", count);

// Ternary Operator 
var age = 20;
var canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log("Can vote:", canVote);