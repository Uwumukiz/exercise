// Declare and initialize an array called Planets with 5 string values
// console.log each item in the array
// Also console.log the index in each iteration

let planets = ['Mars', 'venus', 'earth', 'nepturne', 'jupiter'];
let i=0;
while(i<planets.length){
    console.log([planets[i], planets.indexOf(planets[i])]);
    i++;
}