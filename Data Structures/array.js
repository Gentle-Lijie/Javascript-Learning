var arr = [1, 2, 3, 4, 5];

console.log("Original array:", arr);

// push
arr.push(100);
console.log("After push(100):", arr);

// pop
var popped = arr.pop();
console.log("After pop():", arr, "Popped value:", popped);

// unshift (push_back)
arr.unshift(0);
console.log("After unshift(0):", arr);

// shift (pop_front)
arr.shift();
console.log("After shift():", arr);

// reverse
arr.reverse();
console.log("After reverse():", arr);

// splice
arr.splice(2, 0, 200, 300); // Insert 200 and 300 at index 2
console.log("After splice(2, 0, 200, 300):", arr);
var spliced = arr.splice(2, 2); // Remove 2 elements from index 2
console.log("After splice(2, 2):", arr);
console.log("Spliced elements:", spliced);

// slice
var sliced = arr.slice(1, 4); // Get elements from index 1 to 3
console.log("Sliced array (1,4):", sliced);

// sort
arr.push(50, 20, 70);
// 1. with no params
sorted_arr = arr.sort(); // Default is dictionary order
console.log("After sort() with no params:", sorted_arr);
// 2. with compare function
sorted_arr = arr.sort(function (a, b) { return a - b; }); // Ascending order
console.log("After sort() with compare function:", sorted_arr);

// join
var joined = arr.join(" - ");
console.log("Joined array with ' - ':", joined);

// concat
var new_arr = arr.concat([400, 500], [600, 700]);
console.log("After concat([400,500], [600,700]):", new_arr);

// slice
var new_sliced = new_arr.slice(3, 8);
console.log("Sliced new_arr (3,8):", new_sliced);

// indexOf
var index = new_arr.indexOf(500);
console.log("Index of 500 in new_arr:", index);
var not_found_index = new_arr.indexOf(999);
console.log("Index of 999 in new_arr (not found):", not_found_index);

// forEach
arr.forEach(function (value, index) {
    console.log("forEach - Index:", index, "Value:", value);
});
// = for(value of arr) { ... } and for(index in arr) { ... }

// map
var mapped = arr.map(function (value, index) {
    return value + index; // make arr[index] = returned value
});
console.log("Mapped array (index + 1):", mapped);

// filter
var filtered = arr.filter(function (value, index) {
    return value % 2 === 0; // keep even numbers
}); // returns a new array where only keeps numbers that filter function returns true
console.log("Filtered array (even numbers):", filtered);

// every
var all_even = arr.every(function (value, index) {
    return value % 2 === 0;
});// returns if arr = arr.filter(...) has same length as arr
console.log("Are all elements even in arr?:", all_even);

// some
var some_even = arr.some(function (value, index) {
    return value % 2 === 0;
});// returns if arr = arr.filter(...) has length > 0
console.log("Is there any even element in arr?:", some_even);
