// Define an array of constellations
var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];

// Define an array of planets
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];

// Define a variable for a star
var star = "polaris";

// WRITE YOUR CODE BELOW

// Add a new constellation ("Canis Major") to the beginning of the constellations array
const newConstellation = "Canis Major";
constellations.unshift(newConstellation);

console.log("Constellations = " +constellations); // Print the updated constellations array

// Find the index of "Venus" in the array of planets
var index = planets.indexOf("Venus");

// If "Venus" is found in the array, remove it using splice
if (index !== -1) {
  planets.splice(index, 1);
}

console.log("Planets = " +planets); // Print the updated planets array after removing "Venus"

let galaxy = constellations.concat(planets);  //let galaxy(new array) = constellations+planets 
console.log(galaxy); // print the new galaxy array after joining 

console.log(star.toUpperCase()); //output variable in uppercase 

// Assuming planets is an array
let planets1 = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Use the filter method to create a new array without the element "Venus"
planets1 = planets1.filter(planet => planet !== "Venus");

console.log(planets1);
