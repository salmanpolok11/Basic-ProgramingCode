For loop decleretion korar niyom => 
```javascript
  for( let i = 1 ;  i <= 20; i++ ){
    console.log(i);
    
  }
  ```

  for loop diye jog korar niyom => 
  ```javascript
  let sum = 0;
  for( let i = 1; i <= 10;  i++){
     sum = sum + i
     console.log(i , "This num sum is =>" ,sum);
     
  }
  ```

For loop diye Upor theke niche gonona korar niyom (decrimental) =>
```javascript
for(let i = 10; i >= 0; i-- ){
   console.log(i);
   
}
```

Problem - 1 
I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
```javascript
for( let i = 1; i <= 60; i++){
   console.log(i, "I will invest at least 6 hrs every single day for next 60 days! "); 
}
```

// Problem - 2
// Find all the odd numbers from 61 to 100.
```javascript
for( let  i = 61; i <= 100; i++){
   if( i % 2 === 1){
    //  console.log("This is odd Number =>" , i);
     
   }
}
```

// Problem - 3
// Find all the even numbers from 78 to 98.
```javascript
for( let  i = 78; i <= 98; i++){
   if( i % 2 === 0){
     console.log("This is Even Number =>" , i);
     
   }
}
```

// Problem - 4
// Display sum of all the odd numbers from 91 to 129.
```javascript
let sum = 0;
for( let i = 91; i <= 129; i++){
     if( i % 2 === 1){
       sum = sum + i
       console.log( i, "This number sum is => ",sum);
       
     }
}
```

// Problem - 5
// Display sum of all the even numbers from 51 to 85.
```javascript
let sum = 0;
for( let i = 51; i <= 85; i++){
     if( i % 2 === 0){
       sum = sum + i
       console.log( i, "This number sum is => ",sum);
       
     }
}
```


// Problem - 6
// Generate a multiplication table for number 9
```javascript
let multi = 9;
for( let num = 1; num <=10; num++ ){
    console.log(multi , "x" , num , "=", (num * multi));
    
}
```

// Problem - 7;
// Implement a countdown timer that counts down from 81 to 65.
```javascript
for( let n = 81; n >= 65; n--){
   console.log(n);
   
}
```
