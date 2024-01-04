// Function declaration to compare two parameters
function compareValues(x, y) {
    if (x === y) {
        console.log(x + " and " + y+ " are equal in both value and type.");
    } else if (x == y) {
        console.log(x + " and " + y+ " are equal in value, but not in type.");
    } else {
        console.log(x + " and " + y+ " are not equal in any way.");
    }
}

// results should be 
compareValues(5, 5);      // Equal in both value and type
compareValues("5", 5);    // Equal in value, but not in type
compareValues(5, "ten");     // Not equal in any way

// Function expression to iterate through an array and check if each index is less than 10
var checkArrayValues = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 10) {
            console.log("Index " + i + " is less than 10.");
        } else {
            console.log("Index " + i + " is not less than 10.");
        }
    }
};

// Example usage
var myArray = [5, 12, 8, 15, 7];
checkArrayValues(myArray);
