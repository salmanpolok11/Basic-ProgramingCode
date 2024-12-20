// Problem-1: Write a program that determines whether a given number is positive or negative.
let num = -1;
if( num > 0){
   console.log("Positive Number");
}  else if( num < 0){
  console.log("Nagitive Number");
 }else{
   console.log("Number Is Zero");
  
 }

 
// Problem - 2 : Write a program that checks if a number is even or odd.
let num1 = 8 ;
if( num1 % 2 === 0){
   console.log("Even Number");
} else {
   console.log("Odd Number ")
   
}


function sumOfNumbers(numbers) {
   let sum =0;
    for( const number of numbers ){
              console.log(number);
               sum = sum + number;   
    }     
    return sum;


}
const numArry = [5, 10, 5, 30, 20, 15, ]
const sum = sumOfNumbers(numArry)
console.log("Result =>", sum);

