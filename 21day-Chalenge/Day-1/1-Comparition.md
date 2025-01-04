JavaScript-এর **Array** নিয়ে সহজভাবে আলোচনা করব এবং প্রতিটি অংশ আলাদা উদাহরণের মাধ্যমে ব্যাখ্যা করব যাতে তুমি সহজে বুঝতে পারো। বাস্তব জীবনের উদাহরণও একাধিকভাবে দেখাব।
---
## **JavaScript Array কী?**
### ধরো, তুমি একটা শপিং লিস্ট বানাচ্ছ: 
- তুমি একটা তালিকায় আইটেম রাখতে চাও। যেমন, "Apple", "Banana", "Milk"।  
এক্ষেত্রে Array হলো এমন এক ধরণের কন্টেইনার যেখানে তুমি একসাথে অনেক আইটেম রাখতে পারো।

**কোড:**  
```javascript
let shoppingList = ["Apple", "Banana", "Milk"];
console.log(shoppingList[0]); // Output: Apple (প্রথম আইটেম)
```
---
## **কেন Array দরকার?**
1. অনেক ডেটা এক জায়গায় রাখতে।
2. ডেটা সহজে যোগ/সরাতে।
3. ডেটার উপর লুপ চালাতে।
---

## **Array-এর ব্যবহার:**
### **1. Array তৈরি করা**
#### শূন্য বা আইটেমসহ:
```javascript
let emptyArray = []; // ফাঁকা অ্যারে
let numbers = [1, 2, 3, 4]; // সংখ্যার তালিকা
```
---
### **2. অ্যারেতে ডেটা যোগ/সরানো**

#### (a) **push(): নতুন আইটেম শেষ দিকে যোগ করা**
ধরো, শপিং লিস্টে "Eggs" যোগ করতে হবে:
```javascript
let shoppingList = ["Apple", "Banana"];
shoppingList.push("Eggs");
console.log(shoppingList); // ["Apple", "Banana", "Eggs"]
```
#### (b) **pop(): শেষ আইটেম সরানো**
```javascript
shoppingList.pop();
console.log(shoppingList); // ["Apple", "Banana"]
```
#### (c) **unshift(): নতুন আইটেম প্রথমে যোগ করা**
```javascript
shoppingList.unshift("Bread");
console.log(shoppingList); // ["Bread", "Apple", "Banana"]
```
#### (d) **shift(): প্রথম আইটেম সরানো**
```javascript
shoppingList.shift();
console.log(shoppingList); // ["Apple", "Banana"]
```
---
### **3. ডেটা ফিল্টার করা (filter)**  
ধরো, তোমার একটি পণ্যের তালিকা আছে। তুমি কেবল সেগুলো বের করতে চাও যেগুলোর নাম "a" অক্ষর দিয়ে শুরু।  

```javascript
let products = ["Apple", "Banana", "Cherry", "Avocado"];
let filtered = products.filter(product => product.startsWith("A"));
console.log(filtered); // ["Apple", "Avocado"]
```
---
### **4. অ্যারেতে প্রতিটি আইটেমের উপর কাজ (forEach)**  
ধরো, তুমি প্রতিটি পণ্যের নাম প্রিন্ট করতে চাও:
```javascript
products.forEach(product => console.log(product));
// Output:
// Apple
// Banana
// Cherry
// Avocado
```
---
### **5. নতুন তালিকা তৈরি করা (map)**  
ধরো, প্রতিটি পণ্যের নাম বড় হাতের অক্ষরে করতে হবে:
```javascript
let uppercaseProducts = products.map(product => product.toUpperCase());
console.log(uppercaseProducts); // ["APPLE", "BANANA", "CHERRY", "AVOCADO"]
```
---
### **6. তালিকার এলিমেন্ট যোগ করা (reduce)**  
ধরো, বিক্রির একটি সংখ্যা তালিকা আছে। মোট বিক্রির পরিমাণ বের করতে হবে:
```javascript
let sales = [100, 200, 150];
let totalSales = sales.reduce((sum, sale) => sum + sale, 0);
console.log(totalSales); // 450
```
---
### **বাস্তব জীবনের উদাহরণগুলো**

#### **1. শিক্ষার্থীর নামের তালিকা ম্যানেজ করা:**
```javascript
let students = ["Ali", "Saba", "Rafiq"];
students.push("Mina"); // নতুন নাম যোগ
console.log(students); // ["Ali", "Saba", "Rafiq", "Mina"]
```
#### **2. ফিল্টার করে ডেটা বের করা:**
একটি ই-কমার্স সাইটে নির্দিষ্ট দামের প্রোডাক্ট খুঁজে বের করা:
```javascript
let products = [
    { name: "Laptop", price: 500 },
    { name: "Phone", price: 200 },
    { name: "Headphones", price: 50 },
];

let affordable = products.filter(product => product.price <= 200);
console.log(affordable); 
// Output: [{ name: "Phone", price: 200 }, { name: "Headphones", price: 50 }]
```
#### **3. প্রোডাক্ট সাজানো:**
পণ্যের নাম অনুযায়ী সাজানো:
```javascript
let sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedProducts);
// Output: প্রোডাক্ট তালিকা নাম অনুসারে সাজানো থাকবে
```
---
### **উপসংহার:**
JavaScript-এর **Array** হল ডেটা ম্যানেজমেন্টের একটি শক্তিশালী হাতিয়ার। 
- **Filter, map, reduce, sort** এর মতো মেথড দিয়ে ডেটা নিয়ে কাজ আরও সহজ। 
- বাস্তব জীবনের টাস্ক, যেমন তালিকা ম্যানেজ করা, ফিল্টার করা বা গণনা করা, সহজে সমাধান করা যায়।  

তুমি যদি বিশেষ কোনো উদাহরণ বা ধাপে সমস্যায় পড়ো, জানাও! 😊