## জাভাস্ক্রিপ্ট অ্যারে: A থেকে Z সব পদ্ধতি এবং বাস্তব জীবনের ব্যবহার

**জাভাস্ক্রিপ্ট অ্যারে** হলো এক ধরনের ডাটা স্ট্রাকচার যেখানে একাধিক মানকে ক্রমিকভাবে সংরক্ষণ করা হয়। এই মানগুলো একই ধরনের হতে পারে আবার ভিন্ন ধরনেরও হতে পারে। অ্যারে ব্যবহার করে আমরা বাস্তব জীবনের অনেক সমস্যার সমাধান করতে পারি।

### অ্যারের উপর কাজ করার বিভিন্ন পদ্ধতি:

* **তৈরি করা:**
  * `let array = [];` // একটি খালি অ্যারে তৈরি করা
  * `let array = [1, 2, 3, "hello"];` // কিছু মান দিয়ে একটি অ্যারে তৈরি করা
* **মান যোগ করা:**
  * `array.push(value);` // শেষে একটি মান যোগ করা
  * `array.unshift(value);` // শুরুতে একটি মান যোগ করা
* **মান বাদ দেওয়া:**
  * `array.pop();` // শেষের মান বাদ দেওয়া
  * `array.shift();` // শুরুর মান বাদ দেওয়া
  * `array.splice(index, count);` // নির্দিষ্ট ইনডেক্স থেকে নির্দিষ্ট সংখ্যক মান বাদ দেওয়া
* **মান পরিবর্তন করা:**
  * `array[index] = newValue;` // নির্দিষ্ট ইনডেক্সের মান পরিবর্তন করা
* **দৈর্ঘ্য জানা:**
  * `array.length;`
* **সন্ধান করা:**
  * `array.indexOf(value);` // কোনো মান কোন ইনডেক্সে আছে কিনা খুঁজে বের করা
* **সাজানো:**
  * `array.sort();` // অ্যারের মানগুলোকে আলফাবেটিক্যালি বা সংখ্যা অনুযায়ী সাজানো
* **পরিবর্তন ছাড়া সবগুলো মানের উপর কোনো কাজ করা:**
  * `array.forEach(function(value, index, array) { ... });`
* **নতুন একটি অ্যারে তৈরি করে সবগুলো মানের উপর কোনো কাজ করা:**
  * `let newArray = array.map(function(value, index, array) { ... });`
* **কোনো শর্ত মিলে এমন মানগুলোকে নিয়ে একটি নতুন অ্যারে তৈরি করা:**
  * `let filteredArray = array.filter(function(value, index, array) { ... });`
* **সবগুলো মানকে একটি একক মানে রূপান্তরিত করা:**
  * `let reducedValue = array.reduce(function(accumulator, currentValue, currentIndex, array) { ... });`

### বাস্তব জীবনে অ্যারের ব্যবহার:

* **ওয়েবসাইটে ডাটা দেখানো:** একটি ওয়েবসাইটে পণ্যের তালিকা, ব্যবহোতার তালিকা ইত্যাদি দেখানোর জন্য অ্যারে ব্যবহার করা হয়।
* **ডাটাবেজ থেকে ডাটা ফেচ করা:** ডাটাবেজ থেকে ফেচ করা ডাটাগুলোকে একটি অ্যারেতে রেখে পরবর্তী প্রসেসিং এর জন্য ব্যবহার করা হয়।
* **ফর্ম ডাটা সংগ্রহ করা:** একটি ফর্ম থেকে পাওয়া ডাটাগুলোকে একটি অ্যারেতে রেখে সার্ভারে পাঠানো হয়।
* **গেম ডেভেলপমেন্ট:** গেমে চরিত্রের অবস্থান, শত্রুর তালিকা ইত্যাদি সংরক্ষণের জন্য অ্যারে ব্যবহার করা হয়।
* **ডাটা বিশ্লেষণ:** বড় ডাটা সেটকে ছোট ছোট অংশে ভাগ করে বিশ্লেষণ করার জন্য অ্যারে ব্যবহার করা হয়।

### উদাহরণ:

```javascript
let fruits = ["apple", "banana", "orange"];
fruits.push("mango"); // অ্যারের শেষে "mango" যোগ করা
fruits.sort(); // অ্যারের মানগুলোকে আলফাবেটিক্যালি সাজানো

console.log(fruits); // ["apple", "banana", "mango", "orange"]
```

**জাভাস্ক্রিপ্ট অ্যারে পদ্ধতির বাংলা ব্যাখ্যা**

এখানে জাভাস্ক্রিপ্ট অ্যারে পদ্ধতির একটি বিস্তারিত তালিকা দেওয়া হলো, তাদের বর্ণনা এবং উদাহরণ সহ:

**1. `push()`**

* **কার্যকারিতা:** অ্যারের শেষে একটি বা একাধিক উপাদান যোগ করে।
* **সিনট্যাক্স:** `array.push(element1, ..., elementN)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
numbers.push(4, 5); // numbers এখন হবে [1, 2, 3, 4, 5]
```

**2. `pop()`**

* **কার্যকারিতা:** অ্যারের শেষের উপাদানটি মুছে ফেলে এবং তা ফেরত দেয়।
* **সিনট্যাক্স:** `array.pop()`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
const lastNumber = numbers.pop(); // lastNumber হবে 3, numbers এখন হবে [1, 2]
```

**3. `unshift()`**

* **কার্যকারিতা:** অ্যারের শুরুতে একটি বা একাধিক উপাদান যোগ করে।
* **সিনট্যাক্স:** `array.unshift(element1, ..., elementN)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
numbers.unshift(0); // numbers এখন হবে [0, 1, 2, 3]
```

**4. `shift()`**

* **কার্যকারিতা:** অ্যারের প্রথম উপাদানটি মুছে ফেলে এবং তা ফেরত দেয়।
* **সিনট্যাক্স:** `array.shift()`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
const firstNumber = numbers.shift(); // firstNumber হবে 1, numbers এখন হবে [2, 3]
```

**5. `concat()`**

* **কার্যকারিতা:** নির্দিষ্ট অ্যারে বা মানগুলোকে সংযুক্ত করে একটি নতুন অ্যারে তৈরি করে।
* **সিনট্যাক্স:** `array1.concat(array2, ..., elementN)`
* **উদাহরণ:**

```javascript
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = array1.concat(array2, 5); // combinedArray হবে [1, 2, 3, 4, 5]
```

**6. `slice()`**

* **কার্যকারিতা:** অ্যারের একটি অংশের একটি শ্যালো কপি তৈরি করে।
* **সিনট্যাক্স:** `array.slice(start, end)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 3); // slicedArray হবে [2, 3]
```

**7. `splice()`**

* **কার্যকারিতা:** বিদ্যমান উপাদানগুলো মুছে ফেলা বা প্রতিস্থাপন করে এবং/অথবা নতুন উপাদান যোগ করে অ্যারের বিষয়বস্তু পরিবর্তন করে।
* **সিনট্যাক্স:** `array.splice(start, deleteCount, item1, ..., itemN)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
numbers.splice(1, 1, 4); // numbers এখন হবে [1, 4, 3]
```

**8. `sort()`**

* **কার্যকারিতা:** অ্যারের উপাদানগুলোকে সাজিয়ে রাখে এবং সাজানো অ্যারে ফেরত দেয়।
* **সিনট্যাক্স:** `array.sort(compareFunction)`
* **উদাহরণ:**

```javascript
const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
numbers.sort(); // numbers এখন হবে [1, 1, 2, 3, 4, 5, 6, 9]
```

**9. `reverse()`**

* **কার্যকারিতা:** অ্যারের উপাদানগুলোর ক্রম উল্টো করে।
* **সিনট্যাক্স:** `array.reverse()`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
numbers.reverse(); // numbers এখন হবে [3, 2, 1]
```

**10. `join()`**

* **কার্যকারিতা:** অ্যারের উপাদানগুলোকে সংযুক্ত করে একটি নতুন স্ট্রিং তৈরি করে, একটি নির্দিষ্ট বিভাজক দ্বারা পৃথক করা।
* **সিনট্যাক্স:** `array.join(separator)`
* **উদাহরণ:**

```javascript
const elements = ['Fire', 'Air', 'Water', 'Earth'];
const joinedString = elements.join(' - '); // joinedString হবে "Fire - Air - Water - Earth"
```

**11. `indexOf()`**

* **কার্যকারিতা:** অ্যারেতে কোনো নির্দিষ্ট উপাদান প্রথম কোন ইনডেক্সে পাওয়া যায় তা ফেরত দেয়, নতুবা -1 ফেরত দেয়।
* **সিনট্যাক্স:** `array.indexOf(searchElement, fromIndex)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3, 2];
const index = numbers.indexOf(2); // index হবে 1
```

**12. `lastIndexOf()`**

* **কার্যকারিতা:** অ্যারেতে কোনো নির্দিষ্ট উপাদান শেষ কোন ইনডেক্সে পাওয়া যায় তা ফেরত দেয়, নতুবা -1 ফেরত দেয়।
* **সিনট্যাক্স:** `array.lastIndexOf(searchElement, fromIndex)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3, 2];
const lastIndex = numbers.lastIndexOf(2); // lastIndex হবে 3
```

**13. `includes()`**

* **কার্যকারিতা:** নির্ধারণ করে যে কোনো অ্যারে তার এন্ট্রিগুলোর মধ্যে একটি নির্দিষ্ট মান অন্তর্ভুক্ত কিনা, যথাযথভাবে সত্য বা মিথ্যা ফেরত দেয়।
* **সিনট্যাক্স:** `array.includes(valueToFind, fromIndex)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
const hasTwo = numbers.includes(2); // hasTwo হবে true
```

**14. `forEach()`**

* **কার্যকারিতা:** প্রদত্ত ফাংশনটিকে অ্যারের প্রতিটি উপাদানের জন্য একবার করে কার্যকর করে।
* **সিনট্যাক্স:** `array.forEach(callback(currentValue, index, array), thisArg)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
numbers.forEach(number => console.log(number)); // কনসোলে 1, 2 এবং 3 লগ করে
```

**15. `map()`**

* **কার্যকারিতা:** কল করা অ্যারের প্রতিটি উপাদানের উপর প্রদত্ত ফাংশন কল করার ফলাফল দিয়ে একটি নতুন অ্যারে তৈরি করে।
* **সিনট্যাক্স:** `array.map(callback(currentValue, index, array), thisArg)`
* **উদাহরণ:**

```javascript
const numbers = [1, 2, 3];
const squaredNumbers = numbers.map(number => number * number); // squaredNumbers হবে [1, 4, 9]
```

**16. `filter()`**

* **কার্যকারিতা