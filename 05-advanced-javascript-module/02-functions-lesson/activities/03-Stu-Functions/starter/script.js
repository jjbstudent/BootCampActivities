// creates a function which calculates 1+2
function additionFunction() {
    return 1+2

}

// This is a function expression which calculates 20-10
var subtractFunction = function () {
  return 20 - 10;
};

//create a variable to hold the the function value
var additionResult = additionFunction();
var subtractresult = subtractFunction();

//outputs results in the console log
console.log(
  "The result that is returned from the additionFunction() call is: " +
    additionResult
);
console.log(
  "The result that is returned from the subtractFunctrion() call is: " + subtractresult
);

//function used to calculate the area of a square 
function SquareArea(sideLength) {
  return sideLength * sideLength;
}

// output the results using an outside variable 
var sideLength = 5;
var area = SquareArea(sideLength);
console.log("The area of the square with side length", sideLength, "is:", area);
