
Medhod - 1
Arrry ar 4ta medhod =>
```js
const nameArray = [ "Salman" , "Polok" , "Onu" , "Topon"]
nameArray.pop() // pop medhod use kore pisoner man bad deya jay.
nameArray.push("Mamun") // push medhod use kore pisoner man add kora jay.
nameArray.shift() // shift medhod use kore samner man bad deya jay.
nameArray.unshift("Ridoy") //unshift  medhod use kore samner man jog kora jay.
console.log(nameArray);
```

Medhod - 2
Duita Array ke aksathe jog korthe concat() medthod use kora jay =>
```js
const odd = [ 1, 3, 5, 7, 8, 9,];
const even = [ 2, 4, 6, 8, 10];
const added = odd.concat(even)
console.log(added);
console.log(odd.concat(even)); //OR
```

Medhod - 3
Arrary ar slice()  medhod diye arrary ke kata jay =>
```js
const numbers = ["Abul" , "Babul" , "Chabul" , "Kabul", "Nabul"];
const slicedArray = numbers.slice(3, 5);
console.log(slicedArray);
```

Medhod - 4
Arrary ar moddhe alomelo position ke sajiye rakha jay sort()  ar maddhome =>
```js
const num = [ 9 , 8, 7, 6, 5, 4, 3, 2, 1]
const result = num.sort()
console.log(result);

//2
const word = [ "z" ,  "x" , "m" , "h" , "o" , 'a' , 't' , 'y', 'b']
const res = word.sort();
console.log(res);
```


Medhod - 5
Arrary ar man ke ultay dite chile reverse() mdhod use korthe hoy => 
```js
const number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
const res = number.reverse();
console.log(res);
```

Medhod - 6
`join()` পদ্ধতি একটি সহজ কিন্তু শক্তিশালী পদ্ধতি যা অ্যারে উপাদানগুলোকে স্ট্রিং রূপান্তর করতে সহায়তা করে।

```javascript
const fruits = ["apple", "banana", "orange"];

// কোনো বিভাজক ছাড়া সংযুক্ত করা
const joinedFruits1 = fruits.join(); 
console.log(joinedFruits1); // আউটপুট: "apple,banana,orange"

// কমা (,) দিয়ে সংযুক্ত করা 
const joinedFruits2 = fruits.join(","); 
console.log(joinedFruits2); // আউটপুট: "apple,banana,orange"

// হাইফেন (-) দিয়ে সংযুক্ত করা
const joinedFruits3 = fruits.join("-"); 
console.log(joinedFruits3); // আউটপুট: "apple-banana-orange"

// স্পেস (" ") দিয়ে সংযুক্ত করা
const joinedFruits4 = fruits.join(" "); 
console.log(joinedFruits4); // আউটপুট: "apple banana orange" 
```


Medhod - 7 
includes() পদ্ধতি একটি অ্যারেতে কোনো নির্দিষ্ট মান উপস্থিত আছে কিনা তা নির্ধারণ করে। যদি উপস্থিত থাকে তাহলে true ফেরত দেয়, অন্যথায় false ফেরত দেয়।
```js
const num = [ 1 , 3, 5, 7, 9, 2, 4, 6, 8 ]
const res = num.includes(3)
console.log(res);
```