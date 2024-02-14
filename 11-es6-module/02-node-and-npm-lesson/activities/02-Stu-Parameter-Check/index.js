console.log(process.argv)

// const arg1 = true;
// const arg2 = false;

// console.log(arg1 && arg2) //argv1 && argv2 = false  
// console.log(arg1 || arg2) //argv1 || argv2 = true
// console.log(arg1 === arg2) //argv1 = argv2 = false

const firstInput = process.argv[2];
const secondInput = process.argv[3];

console.log(firstInput);
console.log(secondInput);

if(process.argv[2] === process.argv[3]) {
    console.log(true);
} else {
    console.log(false);
}

//console.log(process.argv[2] === process.argv[3]);

