// Variable definition

var message = "Hello, Variables!";
console.log(message);
var n1 = 10;
var n2 = 0x2f; // Hexadecimal for 47
var n3 = 1e5; // Scientific notation for 100000
console.log("n1:", n1, "n2:", n2, "n3:", n3);
var b1 = true;
var b2 = false;
console.log("b1:", b1, "b2:", b2);
var nullVar = null;
var undefinedVar;
console.log("nullVar:", nullVar, "undefinedVar:", undefinedVar);
console.clear();
console.log(typeof message);      // string
console.log(typeof n1);          // number
console.log(typeof b1);          // boolean
console.log(typeof nullVar);     // object
console.log(typeof undefinedVar); // undefined

// Variable conversion

var numStr = "123.45cc";
var num = Number(numStr);
console.log("Converted number:", num, "Type:", typeof num);

var parseNum = parseInt(numStr);
console.log("Parsed integer:", parseNum, "Type:", typeof parseNum);

var floatNum = parseFloat(numStr);
console.log("Parsed float:", floatNum, "Type:", typeof floatNum);

var parseStringNum = parseInt("100abc");
console.log("Parsed integer from '100abc':", parseStringNum, "Type:", typeof parseStringNum);

var boolTrue = Boolean(1);
var boolFalse = Boolean(0);
console.log("Boolean(1):", boolTrue, "Boolean(0):", boolFalse);

var strFromNum = String(123);
console.log("String from number 123:", strFromNum, "Type:", typeof strFromNum);

var toStringFromNum = (456).toString();
console.log("toString from number 456:", toStringFromNum, "Type:", typeof toStringFromNum);

console.log("Those variables that returns false when converted to Boolean:");
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(''):", Boolean(''));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log("Boolean(NaN):", Boolean(NaN));
