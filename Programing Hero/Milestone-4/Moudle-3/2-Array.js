// *Array lekhar niyom niche dekhano holo => 
  const writeArray = ["Polok" , "Salman" , "Islam" , "Ridoy" , " Samiul"];
const writeArrayNumber = [ 12 , 23, 45, 76, 45, 98, 9, 34 ];
const writeBoolenTypeArray = [ true , false , true , false];

// *Akha Arrayte Koyta Man ase ta ber korte hoy (length) comantd diye =>
  console.log(writeArray.length);
  
// *Aktha Array koto position ase tar (index) ber korar niyom nishe dekhano holo => 
  const nameArray = [ "sabana" , "sabnur", " Moushumi " ,  " Priya " , "Apu "];
  console.log(nameArray[0]);  
  console.log(nameArray[1]);  
  console.log(nameArray[2]);  
// Index suru hoy 0 position diye 

// *Aktha Array ar index ar man poribortton korar niyom  => 
  const artistArray = [ "sabana" , "sabnur", " Moushumi " ,  " Priya " , "Apu "];
  artistArray[2] = "Mannna"
  console.log(artistArray);
  

// *Problem- 1
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
const fruits = ["Banana" , "Ornge" , "Peyara" , "Pomkin" , " Boroi"];
console.log(fruits);
console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);

// *Problem- 2  Add or remove elements 
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
const touristDestination = [ " Shajek" , " Bandorbon", "Coxbazar"];
touristDestination.push("ThakurGa")
touristDestination.push("AndorKilla" , "ChottarPul")
touristDestination.pop()
console.log(touristDestination);

// * Problem-3 Checking Array Membership with ‘includes’
// Create an array of books containing different book.
// Use the includes method to check if the array contains a javascript book.
// Print a message to the console indicating whether the element is present in the array or not.
const books = ["JavaScript: The Good Parts", "Eloquent JavaScript", "You Don't Know JS", "Clean Code", "The Pragmatic Programmer"];
const hasJavaScriptBook = books.includes("JavaScript: The Good Parts");
if (hasJavaScriptBook) {
  console.log("The array contains a JavaScript book.");
} else {
  console.log("The array does not contain a JavaScript book.");
}


// *Problem - 4 Combining Arrays
// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log()
const fruits = ["apple", "banana", "mango"];
const vegetables = ["carrot", "broccoli", "spinach"];
const combinedArray = fruits.concat(vegetables);
console.log("Fruits array:", fruits);
console.log("Vegetables array:", vegetables);
console.log("Combined array:", combinedArray);








