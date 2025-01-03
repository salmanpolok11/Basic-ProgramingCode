// *split() মেথডের কাজ হলো কোনো স্ট্রিং (string) কে নির্দিষ্ট একটি নির্ধারিত সীমারেখা বা ডিলিমিটার (delimiter) অনুযায়ী ছোট ছোট অংশে ভাগ করে একটি অ্যারের (array) মধ্যে সংরক্ষণ করা। সহজভাবে বললে, এটি একটি বড় স্ট্রিংকে আলাদা আলাদা খণ্ডে ভাগ করে ফেলে।

// যেভাবে কাজ করে:

// - আপনি একটি স্ট্রিং দিবেন এবং একটি ডিলিমিটার (যেমন: স্পেস, কমা, ডট ইত্যাদি) নির্ধারণ করবেন।
// - স্ট্রিংটি সেই ডিলিমিটার অনুযায়ী ভাগ হয়ে অ্যারের মধ্যে পরিণত হবে।

// ### উদাহরণ:
let text = "আমরা বাংলায় কথা বলি";
let parts = text.split(" "); // স্পেস দিয়ে ভাগ করা
//এখানে `split(" ")` মানে হলো স্ট্রিংটি প্রতিটি স্পেসের পরে আলাদা অংশে বিভক্ত হবে।
console.log(parts);


// **আউটপুট:**  
["আমরা", "বাংলায়", "কথা", "বলি"]



// আরও একটি উদাহরণ:
let csv = "apple,banana,mango,grape";
let fruits = csv.split(",");
console.log(fruits);

// **আউটপুট:**  

["apple", "banana", "mango", "grape"]


// *বাস্তব জীবনে ব্যবহার:
//  1. **ফাইল ডেটা প্রসেসিং:** CSV বা অন্য ধরনের ডেটা ফাইল থেকে ডেটা আলাদা করার জন্য।
// 2. **ইউজার ইনপুট প্রসেসিং:** ইউজার যদি কোনো স্ট্রিং ইনপুট দেয়, সেটি থেকে প্রাসঙ্গিক তথ্য বের করার জন্য।
// 3. **পাঠ্য বিশ্লেষণ:** টেক্সট বা বাক্যের শব্দগুলো আলাদা করার জন্য।