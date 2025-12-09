// Print a square
var size = 5;
var character = '*';

for (var row = 0; row < size; row++) {
    var line = '';
    for (var col = 0; col < size; col++) {
        line += character + ' ';
    }
    console.log(line);
}

// Print a right-angled triangle
for (var i = 1; i <= size; i++) {
    var line = '';
    for (var col = 0; col < i; col++) {
        line += character + ' ';
    }
    console.log(line);
}

// Print a multiplication table
console.log("Multiplication Table:");
for (var i = 1; i <= 13; i++) {
    var line = '';
    for (var j = 1; j <= i; j++) {
        line += (j.toString() + "*" + i.toString() + "=" + (i * j).toString() + "\t");
    }
    console.log(line);
}

// GCD
var a = 170, b = 24;
var max = -1;
for (var i = 1; i < a; i++) {
    if (a % i == 0 && b % i == 0) {
        if (i > max) {
            max = i;
        }
    }
}
console.log("GCD of", a, "and", b, "is", max);

// LCM
var a = 170, b = 24;
var min = a * b;
for (var i = 1; i <= a * b; i += a) {
    if (i % a == 0 && i % b == 0) {
        min = i;
        break;
    }
}
console.log("LCM of", a, "and", b, "is", min);