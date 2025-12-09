function Person(name) {
    this.name = name;
    this.greet = function () {
        console.log("Hello from " + this.name);
    }
}

var p = new Person("Alice");
console.log(p);

// When created two objects with the same constructor, they are different instances
var p2 = new Person("Bob");
console.log(p2);
p.greet();
p2.greet();

console.log("Are p and p2 the same?", p === p2); // false
