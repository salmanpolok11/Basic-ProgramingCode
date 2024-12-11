// JavaScript-এর `includes()` মেথডের কাজ হলো কোনো স্ট্রিং (string) বা অ্যারে (array)-এর মধ্যে নির্দিষ্ট একটি মান (value) আছে কিনা, তা যাচাই করা। এটি একটি **Boolean (true/false)** মান রিটার্ন করে।  

//  **স্ট্রিং-এর ক্ষেত্রে `includes()`**
// কোনো স্ট্রিং-এর মধ্যে একটি নির্দিষ্ট অংশ আছে কিনা তা পরীক্ষা করে।

// **সিনট্যাক্স:**  
// string.includes(searchString, position);
// - **`searchString`**: যেটি অনুসন্ধান করতে চান।  
// - **`position`** (ঐচ্ছিক): কোথা থেকে অনুসন্ধান শুরু হবে (ডিফল্ট হলো শুরু থেকে)।  
// **উদাহরণ:**

let text = "আমরা জাভাস্ক্রিপ্ট শিখি।";
console.log(text.includes("জাভাস্ক্রিপ্ট")); // true
console.log(text.includes("পাইথন"));       // false


// **উদাহরণ: নির্দিষ্ট অবস্থান থেকে খোঁজা:**

let sentence = "জাভাস্ক্রিপ্ট খুবই মজার।";
console.log(sentence.includes("মজার", 10)); // true
console.log(sentence.includes("জাভা", 5));  // false


// ### **অ্যারের ক্ষেত্রে `includes()`
// কোনো অ্যারের মধ্যে একটি নির্দিষ্ট মান আছে কিনা তা পরীক্ষা করে।

// **সিনট্যাক্স:** 
// array.includes(valueToFind, startIndex);

// - **`valueToFind`**: যেটি খুঁজতে চান।  
// - **`startIndex`** (ঐচ্ছিক): কোন ইনডেক্স থেকে খোঁজা শুরু হবে (ডিফল্ট হলো ০)।  

// **উদাহরণ:**

let numbers = [10, 20, 30, 40];
console.log(numbers.includes(20));  // true
console.log(numbers.includes(50));  // false


// **উদাহরণ: নির্দিষ্ট অবস্থান থেকে খোঁজা:**

let fruits = ["apple", "banana", "mango", "grape"];
console.log(fruits.includes("mango", 2)); // true
console.log(fruits.includes("apple", 1)); // false


// ### **বাস্তব জীবনে ব্যবহার:**
// 1. **ডেটা যাচাই:** অ্যারে বা স্ট্রিং-এ কোনো ভ্যালু আছে কিনা তা পরীক্ষা করা।  
// 2. **ইউজার ইনপুট যাচাই:** ইউজার দেওয়া ডেটা একটি নির্দিষ্ট শর্ত পূরণ করে কিনা।  
// 3. **সার্চ ফিচার:** কন্টেন্ট বা ডেটার মধ্যে কিছু অনুসন্ধান করা।  

// **মনে রাখার বিষয়:**  
// - `includes()` কেস-সেন্সিটিভ (case-sensitive)। অর্থাৎ বড় হাতের অক্ষর ও ছোট হাতের অক্ষর ভিন্ন হিসেবে গণ্য হবে।  
// ```javascript
// console.log("Hello".includes("hello")); // false
// ```