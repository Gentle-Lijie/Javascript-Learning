var age = 20;
var score = 85;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

var gender = "male";
switch (gender) {
    case "male":
        console.log("Gender is male.");
        break;
    case "female":
        console.log("Gender is female.");
        break;
    default:
        console.log("Gender is unspecified.");
        break;
}