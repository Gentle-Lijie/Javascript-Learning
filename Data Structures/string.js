var str1 = "Hello, World!";
var str2 = 'JavaScript is fun.';
var str3 = `Template literals are powerful.`;

console.log(str1.charAt(7)); // Output: W

console.log(str1.toLowerCase()); // Output: hello, world!
console.log(str2.toUpperCase()); // Output: JAVASCRIPT IS FUN.

str_replace = str1.replace('l', 'x');
console.log(str_replace); // Output: Hexlo, World!

var str_with_spaces = "   Trim me!   ";
console.log(str_with_spaces.trim()); // Output: Trim me!

var words = str2.split(' ');
console.log(words); // Output: [ 'JavaScript', 'is', 'fun.' ]

console.log(str3.substring(0, 8)); // Output: Template
// Substring from index 0 to index 8
console.log(str3.substr(0, 8)); // Output: literals
// Substr is abandoned but still works in many environments, takes from index 0 for length 8
console.log(str3.slice(0, 8)); // Output: Template