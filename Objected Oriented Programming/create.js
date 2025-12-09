// Create an object
var obj = {
  name: "Jack",
  age: 18,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

console.log(obj);
obj.greet();

// Create an object using a constructor function
var obj = new Object();
obj.name = "Jack";
obj.age = 18;
obj.greet = function () {
  console.log("Hello, my name is " + this.name);
};

console.log(obj);
obj.greet();

// Create an object using worker function

function createPerson(name, age) {
  var obj = {};
  obj.name = name;
  obj.age = age;
  obj.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
  return obj;
}

// Create an object with customed constructor

function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}

var obj = new CreatePerson("Jack", 18);
console.log(obj);
obj.greet(); 
