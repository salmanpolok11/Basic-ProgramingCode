1. Sum of Array Elements
```js
const number = [ 1, 3, 5, 7, 9,];
let sum = 0;
for( let num of number){
        sum += num
        console.log(sum);
}
```

2. Find Maximum Value in Array =>
```js
const nums = [ 2, 4,11, 9,1, 6, 8, ]
let max = 0;
for( let num of nums){
   if( num > max){
     max = num
   } 
}
console.log(max);
```


// 6. Find Common Elements
// Problem: Given two arrays, find the elements that appear in both arrays.
```js
const array1 = [ 1, 2, 3, 4,]
const array2 = [ 3, 4, 5, 6]
const commonElement = []
for( item1 of array1 ){
    for( item2 of array2){
       if( item1 === item2){
          commonElement.push(item1)
          break;
       }
    }
   
}
console.log(commonElement);
```

