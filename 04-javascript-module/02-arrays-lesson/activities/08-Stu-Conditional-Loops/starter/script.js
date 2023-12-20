// Write your code here

//create the animal array
var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

//loop through myFarm array and log each animal
for (var i = 0; i < myFarm.length; i++) {
  var animal = myFarm[i];

  if (animal.startsWith("c") || animal.startsWith("o")) {
    //if animal starts with 'c' or animal starts with 'o'
    alert(
      "The first letter of the animal's name starts with 'c' or 'o': " + animal
    );
    // Logs myFarm in console log
    console.log(animal);
  }
}
