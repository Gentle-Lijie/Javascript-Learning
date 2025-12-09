function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello from " + this.name);
};

console.log(Person.prototype);  // Person.prototype object
console.log(Person.__proto__); // Function.prototype

var obj1 = new Person("Alice");
var obj2 = new Person("Bob");

console.log(obj1);
console.log(obj2);

console.log(obj1.prototype); // undefined
console.log(obj1.__proto__); // Person.prototype
console.log(obj1.__proto__ === Person.prototype); // true

// If a method should be defined within an object, put it in the prototype of the constructor
obj1.greet();
obj2.greet();

console.log("Are obj1 and obj2 the same?", obj1 === obj2); // false 
console.log("Do obj1 and obj2 share the same greet method?", obj1.greet === obj2.greet); // true