// *`slice()` মেথডের কাজ হলো একটি অ্যারে (array) বা স্ট্রিং (string)-এর নির্দিষ্ট অংশ কেটে নেওয়া এবং সেটি একটি নতুন অ্যারে বা স্ট্রিং হিসেবে ফেরত দেওয়া। এটি মূল অ্যারে বা স্ট্রিং-কে পরিবর্তন করে না; বরং নতুন ডেটা তৈরি করে।

// কীভাবে কাজ করে:
// `slice(startIndex, endIndex)` ফর্ম্যাটে ব্যবহার করা হয়। 
// - **`startIndex`**: যেখান থেকে কাটতে শুরু হবে।  
// - **`endIndex`**: যেখানে শেষ হবে (এই ইনডেক্স পর্যন্ত না, তার এক ধাপ আগে পর্যন্ত)। 

// যদি `endIndex` দেওয়া না হয়, তবে এটি শেষ পর্যন্ত কাটবে।
// ### **স্ট্রিং-এর উপর `slice()` ব্যবহার:**

let text = "আমরা জাভাস্ক্রিপ্ট শিখি";
let part = text.slice(3, 8); // ৩ নম্বর থেকে ৮ নম্বরের আগে পর্যন্ত
console.log(part);

// **আউটপুট:**  
// "া জাভা"
// এখানে ৩ নম্বর ইনডেক্স থেকে শুরু করে ৮-এর আগে পর্যন্ত কেটে নেওয়া হয়েছে।



//  **অ্যারের উপর `slice()` ব্যবহার:**

let numbers = [10, 20, 30, 40, 50];
let sliced = numbers.slice(1, 4); // ১ নম্বর থেকে ৪-এর আগে পর্যন্ত
console.log(sliced);


// **আউটপুট:**  
// [20, 30, 40]
// মূল অ্যারে `numbers` অপরিবর্তিত থাকবে।


// ### **উদাহরণ ২: শেষ থেকে ইনডেক্স দেওয়া:**
// `slice()`-এ ইনডেক্স নেগেটিভ হলে, এটি শেষ দিক থেকে গুনতে শুরু করে।

let texts = "জাভাস্ক্রিপ্ট";
let parts = texts.slice(-5); // শেষ ৫টি অক্ষর
console.log(parts);


// **আউটপুট:**  
// "স্ক্রিপ্ট"




// ### **বাস্তব জীবনে ব্যবহার:**
// 1. **টেক্সট প্রসেসিং:** বড় স্ট্রিং থেকে নির্দিষ্ট অংশ বের করতে।
// 2. **অ্যারে হ্যান্ডলিং:** ডেটার নির্দিষ্ট অংশ আলাদা করতে।
// 3. **ইউজার ডেটা ম্যানিপুলেশন:** ডেটার অংশবিশেষ বিশ্লেষণ বা প্রদর্শনে। 

// **মনে রাখার বিষয়:**  
// `slice()` মূল ডেটা পরিবর্তন করে না; বরং কপি তৈরি করে। 