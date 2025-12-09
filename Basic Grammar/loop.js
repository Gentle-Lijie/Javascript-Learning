var n = 5;

while (n > 0) {
    console.log("Current n:", n);
    n--;
}

console.log("-----");

for (var i = 0; i < 5; i++) {
    console.log("Current i:", i);
}

console.log("-----");

for (var j = 5; ; j--) {
    console.log("Current j:", j);
    if (j <= 0) break;
}

console.log("-----");

n = 5;
do {
    console.log("Current n in do-while:", n);
    n--;
} while (n > 0);

var arr = [10, 20, 30, 40, 50];
for (index in arr) {
    console.log("Index:", index, "Value:", arr[index]);
}

console.log("-----");

for (value of arr) {
    console.log("Value using for...of:", value);
}   