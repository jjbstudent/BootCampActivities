var a = "50";
var b = 50;
var c = 100;
var d = c % b; //remainder after devision
var e = c / 2; //devided by

var expression1 = (b === e); //true
var expression2 = (e < d); //false

//current values
console.log(a === e); //false
console.log(b !== e);  //false
console.log(c < b);    //false
console.log(d > 0);     //false

// Use comparison operators so all expressions below log to the console as true
console.log("Use comparison operators so all expressions below log to the console as true")
console.log(a !== e); //true
console.log(b == e);  //true
console.log(c > b);
console.log(d < 0);

// Use logical operators so all expressions below log to the console as true
console.log("Use logical operators so all expressions below log to the console as true")
console.log(expression1 || expression2);
console.log(!expression1 || expression2);
  
