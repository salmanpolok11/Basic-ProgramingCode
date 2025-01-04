While Loop diye jog koror niyom => 
```javascript
let i = 1 ;
let sum = 0;
while( i <= 10){
   sum = sum + i ;
   console.log(i);
   console.log("The Result is =>" ,sum);
     i++
     
}
```

While Loop diye jor shonkha ber korar niyom niyom =>
```javascript
let  num = 1;
while ( num <= 10){
     console.log(num);
     if( num % 2 === 0){
       console.log("This is even number" , num);

     }
     num++
     
}
```

Problem - 1
I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
```javascript
let msg = 1;
while( msg <= 60){
    console.log( msg,"I will invest at least 6 hrs every single day for next 60 days!");
    msg++
}

```

Problem - 2
// Find all the odd numbers from 61 to 100.
```javascript
let num = 61;
while( num <= 100){
    if( num % 2 === 1){
       console.log("This is odd number" , num);
       
    }else{
      //   console.log("This is Even number", num);
        
    }
    num++
}
```

Problem - 3
Find all the even numbers from 78 to 98.
```javascript
let num = 78;
while( num <= 98){
    if( num % 2 === 0){
       console.log("This is Even number" , num);
    }else{
      //   console.log("This is Odd number", num);

    }
    num++
}
```

Problem - 4
Display sum of all the odd numbers from 81 to 131.
```javascript
let num = 80;
let sum = 0;
while( num <= 131 ){
   if( num % 2 === 1){
       sum = sum + num
       console.log( "The Odd Number is =>", num, " Sum is =>", sum);
   }
     num++
}
```

Problem - 5
Display sum of all the even numbers from 206 to 311.
```javascript
let num = 206;
let sum = 0;
while( num <= 311){
    if( num % 2 === 0){
        sum = sum + num;
        console.log("This Even number => ", num , "Sum is => ", sum);    
    }
    num++
}
```

Problem - 6
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
```javascript
let number = 5;
let i = 1;
while (i <= 10) {
console.log(i ," x", number , "=" , ( number * i) );
  i++;
}
```

Problem - 7
Implement a countdown timer that counts down from 21 to 15.
```javascript
let count = 21;
while( count >= 15){
      console.log(count);
    count--
}
```
