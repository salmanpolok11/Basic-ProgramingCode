Medthod - 1
Array ke reverse() kora jay eivabee =>
```js
const friends = [ "Abul" , "babul" , "Chabul", "Kabul" , "Nabul"];
const num = [1, 2, 3, 4, 5, 6,7]
friends.reverse()
num.reverse()
console.log(friends);
console.log(num);
```


Medthod  - 2
Arrary ke  for loop diye reverse korar niyom =>
```js
const num = [1, 2, 3, 4, 5, 6,7]
const revArray = []
for( let i = 0;  i < num.length; i++){
    revArray.unshift(num[i])
      
}
console.log(revArray);

```
//2
Arrary String ke for loop diye reverse korar niyom =>
```js
const friends = [ "Abul" , "babul" , "Chabul", "Kabul" , "Nabul"];
const revsArray = [ ]
for( let i = 0;  i < friends.length; i++){
    revsArray.unshift(friends[i])
      
}
console.log(revsArray);
```


Medthod  - 3
Arrary ke sudu  for loop diye reverse korar niyom =>
```js
const friends = [ "Abul" , "babul" , "Chabul", "Kabul" , "Nabul"];
const revsArray = [ ]
for( let i = friends.length - 1; i >=0 ; i--){
 console.log(friends[i]);
}
```