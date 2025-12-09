var obj = { key1: "value1", key2: "value2" };

console.log(obj);

obj.name = "Sample Object";
obj["Sample"] = "Another Value";

console.log(obj);

delete obj.key1;
delete obj["key2"];

console.log(obj);

console.log(obj.key1); // undefined 

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.length = 5;

console.log(arr); // [1,2,3,4,5]

arr.length = 10;

console.log(arr); // [1,2,3,4,5, <5 empty items>]