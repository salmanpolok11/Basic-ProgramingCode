// Problem No - 1 => Write a JavaScript program that displays the largest integer among two integers.
```javascript
const num1 = 60;
const num2 = 60;

if( num1 > num2){
  console.log(" Num1 , num2 ar cheye boro ");
} else if( num2 > num1 ){
  console.log(" Num2 , num1 ar cheye boro ");
}else{
   console.log("Duitai SOman");
   
}
```

//  Problem No - 2 => Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output : The sign is 
```javascript
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
```


// Problem No -3 =>  Check if a number is positive, negative, or zero
```javascript
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
```



// Problem  No - 4 => Check if a number is even or odd
```javascript
const num = 2;
if( num % 2 === 0 ){
   console.log("Positive Number");
} else{
      console.log("Nagative Number");
}
```


// Problem No - 5 => Check if a person is an adult 
```javascript
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
```

// Problem No - 6 =>  Determine the grade based on score
// Take a score as input and determine the grade using conditions:
// Score >= 80: "A"
// Score >= 60: "B"
// Score >= 40: "C"
// Score < 40: "Fail"

```javascript
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
```


 // Problem No - 7 => Find the largest of three numbers
```javascript
const num1 = 23;
const num2 = 7;
const num3 = 14;

if( num1 > num2 && num1 > num3){
   console.log("Lergest Number is num1 => " , num1);
   
} else {
       if( num2 > num1 && num2 > num3){
          console.log("Lergest Number is num2 =>" , num2);

       } else {
         console.log("Leargest Number is num3 => " , num3);
         
       }
}
```

// Problem No - 8 =>  Check if a year is a leap year
```javascript
const year = 2028;
if( year % 4 === 0){
   console.log("Leap Year");
} else{
          console.log("Leaop Year Not");
          
}
```




// Problem No - 9 => Determine the day of the week
Take a number as input and print the corresponding day of the week:
1 = Sunday, 2 = Monday, ..., 7 = Saturday
```javascript
const weekDay = 2;

if (weekDay === 1) {
  console.log("Sunday");

} else {
  if (weekDay === 2) {
    console.log("Monday");
  } else {
    if (weekDay === 3) {
      console.log("Tuesday ");

    } else {
      if (weekDay === 4) {
        console.log("Wednesday");
      } else {
        if (weekDay === 5) {
          console.log("Thursday");
        } else {
          if (weekDay === 6) {
            console.log("Friday");
          } else {
            if (weekDay === 7) {
              console.log("Saturday");
            } else {
              console.log(" This is not a weekend day");

            }
          }
        }
      }
    }
  }
}
```



// Problem No - 10  Simple login system
// Take a username and password as input and check if they match:
// Username: "admin"
// Password: "1234"
```javascript
const userName = "admin"
const password = 1234;

if( userName === "admin" && password === 1234){
    console.log("Log in Succesful");
    
} else{
   console.log("Please give right info");
   
}
```



//Problem No - 11  =>  Check if a character is a vowel or consonant
// Take a character as input and check if it is a vowel (a, e, i, o, u) or a consonant.

```javascript
const character = 'i';

if( character === 'a' || character === 'e' || character === 'i' || character === 'o' ||
  character === ' u'){
   console.log( character, "is a Vowel");
} else{
   console.log( character, "is a Consonant");
   
}
```