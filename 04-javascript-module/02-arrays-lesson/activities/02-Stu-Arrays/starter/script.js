// WRITE YOUR CODE HERE

//array to store student names
var students = ["Qing", "Ritu", "Prates", "Ami"];

//displays the lsit of students 

console.log("Welcome to the class, " + students[0]);
console.log("Welcome to the class, " + students[1]);
console.log("Welcome to the class, " + students[2]);
console.log("Welcome to the class, " + students[3]);

// We use the array's length property to determine how many elements are in the array
console.log(students.length);


//Replaces "Qing" with "Phil"
students[0] = "Phil"; 

//displays update class
console.log("New class of students");
console.log(students);

// Check if "Ritu" is in class
if (students[1] === "Ritu") {
    console.log("Ritu is in class");
}







