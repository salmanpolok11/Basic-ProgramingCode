// Problem No - 1 => Write a JavaScript program that displays the largest integer among two integers.

const num1 = 60;
const num2 = 60;

if( num1 > num2){
  console.log(" Num1 , num2 ar cheye boro ");
} else if( num2 > num1 ){
  console.log(" Num2 , num1 ar cheye boro ");
}else{
   console.log("Duitai SOman");
   
}


//  Problem No - 2 => Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is 

const num1 = 3;
const num2 = -7;
const num3 = 2;
const product = num1 * num2 * num3;
console.log(product);


if(product > 0){
   console.log("The sign is + ")
} else {
                if( product < 0){
                   console.log('The sign is ("-")');
                   
                } else{
                  console.log('The sign is ("Zero")');  
                   
                }
}



// Problem No -3 =>  Check if a number is positive, negative, or zero
const num = -3;
if( num > 0){
   console.log("Positiove Number");
} else {
     if( num < 0){
        console.log("Nagative Number");
        
     } else{
       console.log("Zero");      
     }
}



// Problem  No - 4 => Check if a number is even or odd
const num = 2;
if( num % 2 === 0 ){
   console.log("Positive Number");
} else{
      console.log("Nagative Number");
}


// Problem No - 5 => Check if a person is an adult 
const  age = 69 ;

if( age < 18){
   console.log("You are a Chaild");
} else{
            if( age >= 60){
               console.log("Tumi bura hoiso");
               
            } else{
                        if( age >= 18){
                           console.log("You are a Adult ");
                           
                        }
            }
}


// Problem No - 6 =>  Determine the grade based on score
// Take a score as input and determine the grade using conditions:
// Score >= 80: "A"
// Score >= 60: "B"
// Score >= 40: "C"
// Score < 40: "Fail"

const score = 40;

if( score >= 80){
   console.log("A");
   
} else{ 
  if( score  >=  60){
           console.log( " B");
           
  } else{
      if( score >= 33 ){
          console.log("C");
          
      } else{
         if( score <= 33){
           console.log(" Fail");
           
         }
      }
  }
}