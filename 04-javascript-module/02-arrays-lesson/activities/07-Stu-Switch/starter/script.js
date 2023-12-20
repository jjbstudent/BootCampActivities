// Write your code here

// Prompt the user to enter a day number
var userInput = prompt("Enter a day number (1-7):");

// Convert the user input to a number
var userDay = parseInt(userInput);

//conditions cases for userDays 
if (userDay === 1) {
    alert("You picked Monday!"); 
    console.log("You picked Monday!"); //example if you want to display in console log
} else if (userDay === 2) {
    alert("You picked Tuesday!");
} else if (userDay === 3) {
    alert("You picked Wednesday!");
} else if (userDay === 4) {
    alert("You picked Thursday!");
} else if (userDay === 5) {
    alert("You picked Friday!");
} else if (userDay === 6) {
    alert("You picked Saturday!");
} else if (userDay === 7) {
    alert("You picked Sunday!");
} else {
    alert("Invalid day number entered!");  //any userInput outside '1-7' is invalid
}

//creates a case for each userDay 
switch (userDay) {
    case 1:
        alert("switch-case: You picked Monday!");
        break;
    case 2:
        alert("switch-case: You picked Tuesday!");
        break;
    case 3:
        alert("switch-case: You picked Wednesday!");
        break;
    case 4:
        alert("switch-case: You picked Thursday!");
        break;
    case 5:
        alert("switch-case: You picked Friday!");
        break;
    case 6:
        alert("switch-case: You picked Saturday!");
        break;
    case 7:
        alert("switch-case: You picked Sunday!");
        break;
    default:
        alert("switch-case: Invalid day number entered!");
        break;
}
