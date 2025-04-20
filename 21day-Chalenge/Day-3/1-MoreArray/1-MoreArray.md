// Looping 5ta shekha hoyese  =>
/**
 *  1 - for  of loop
 *  2 - for  in loop
 *  3 - for loop
 * 4 -  while loop
 * 5 - Do while loop
 */

Medhod - 1
Array ar modhe for of loop chalano hoyese =>
```js
const friends = [ "Abul" , "babul" , "Chabul", "Kabul" , "Nabul"];
console.log(friends);
for( friend of friends){
     console.log(friend);
     
}
```


Medthod - 2 
Arrary ar moddhe for loop chaliye man ber korar niyom =>
```js
const friends = [ "Abul" , "babul" , "Chabul", "Kabul" , "Nabul"];
for( let i = 0; i < friends.length; i++){
      console.log(friends[i]);
      
}
```

Medthod - 3
Arrary ar moddhe While loop chaliye man ber korar niyom =>
```js
const friends = [ "Abul" , "babul" , "Chabul", "Kabul" , "Nabul"];
let i = 0;
while( i < friends.length){
  console.log(friends[i]);
     i++
}
```