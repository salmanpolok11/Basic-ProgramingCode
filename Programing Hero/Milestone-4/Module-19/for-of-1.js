// JavaScript-এর `for...of` লুপের কাজ হলো **ইটারেবল (iterable)** ডেটা স্ট্রাকচার (যেমন: অ্যারে, স্ট্রিং, ম্যাপ, সেট ইত্যাদি)-এর প্রতিটি উপাদানের উপর লুপ চালানো। এটি সহজবোধ্য উপায়ে প্রতিটি উপাদানের মান (value) পাওয়ার সুযোগ দেয়।  
// **সাধারণ সিনট্যাক্স:**  
// for (let variable of iterable) {
// কোড ব্লক
// }

// - **`variable`**: প্রত্যেক ধাপে ইটারেবল ডেটা স্ট্রাকচারের একটি উপাদানের মান ধারণ করে।  
// - **`iterable`**: যেটির উপর লুপ চালানো হচ্ছে।  


// **অ্যারের উপর `for...of`

let numbers = [10, 20, 30, 40];
for (let number of numbers) {
    console.log(number);
}


// **আউটপুট:**  
// 10  
// 20  
// 30  
// 40


// এখানে `numbers` অ্যারের প্রতিটি মান একে একে `number` ভেরিয়েবলে রাখা হয়েছে এবং কনসোলে প্রদর্শিত হয়েছে।
//  **স্ট্রিং-এর উপর `for...of`:**

let text = "জাভাস্ক্রিপ্ট";

for (let char of text) {
    console.log(char);
}

// **আউটপুট:**  
// জ  
// া  
// ভ  
// া  
// স  
// ্ক  
// ্র  
// ি  
// প  
// ্ট


// প্রতিটি অক্ষর আলাদা করে লুপের মাধ্যমে দেখানো হয়েছে
// ### **ম্যাপ এবং সেট-এর উপর `for...of`:**
// #### **ম্যাপ (Map):**

// **আউটপুট:**  
// name : Rahim  
// age : 25


// #### **সেট (Set):**
let uniqueNumbers = new Set([1, 2, 3, 4]);

for (let number of uniqueNumbers) {
    console.log(number);
}


// **আউটপুট:**  

// 1  
// 2  
// 3  
// 4


//  **বাস্তব জীবনে ব্যবহার:**
// 1. **অ্যারে বা স্ট্রিং প্রক্রিয়াকরণ:** ডেটার প্রতিটি মানের উপর লজিক প্রয়োগ করতে।  
// 2. **ইউনিক ডেটা হ্যান্ডলিং:** সেট বা ম্যাপ থেকে মান বের করতে।  
// 3. **ইটারেবল অবজেক্ট প্রক্রিয়াকরণ:** যেমন: DOM Collections বা NodeLists-এ লুপ চালাতে।  

// **মনে রাখার বিষয়:**  
// - `for...of` শুধু ইটারেবল ডেটা স্ট্রাকচারের সাথে কাজ করে।  
// - এটি কেবল উপাদানের মান (value) ফেরত দেয়, ইনডেক্স বা কী (key) নয়। ইনডেক্স পেতে হলে `for...in` বা অন্যান্য পদ্ধতি ব্যবহার করতে হয়।  