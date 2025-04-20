### **JavaScript Comparison সম্পূর্ণ বাংলা আলোচনা**  

JavaScript-এ **comparison operators** ব্যবহার করে দুই বা ততোধিক মানের মধ্যে তুলনা করা হয়। এই অপারেটরগুলো **Boolean (true বা false)** রিটার্ন করে।  

---

## **১. Comparison Operators এর প্রকারভেদ**  

| অপারেটর | নাম | ব্যবহার | আউটপুট |
|----------|------|-----------|---------|
| `==` | সমান | `5 == "5"` | `true` |
| `===` | কঠোর সমান | `5 === "5"` | `false` |
| `!=` | অসমান | `5 != "6"` | `true` |
| `!==` | কঠোর অসমান | `5 !== "5"` | `true` |
| `>` | বড় | `10 > 5` | `true` |
| `<` | ছোট | `10 < 5` | `false` |
| `>=` | বড় বা সমান | `10 >= 10` | `true` |
| `<=` | ছোট বা সমান | `5 <= 5` | `true` |

---

## **২. `==` vs `===` (Loose vs Strict Comparison)**  
JavaScript-এ **loose equality (`==`)** এবং **strict equality (`===`)** এর মধ্যে পার্থক্য আছে।  

### **➡️ `==` (Loose Equality)**
- এটি **type coercion** করে মানগুলোর টাইপ পরিবর্তন করে।
- `"5" == 5` হলে **true** হয় কারণ JavaScript স্ট্রিং `"5"` কে সংখ্যা `5` এ রূপান্তর করে।  

```js
console.log(5 == "5"); // true
console.log(true == 1); // true
console.log(null == undefined); // true
```

### **➡️ `===` (Strict Equality)**
- এটি **কোনো টাইপ কনভার্সন করে না**।
- `"5" === 5` হলে **false** হবে কারণ টাইপ এক নয়।  

```js
console.log(5 === "5"); // false
console.log(true === 1); // false
console.log(null === undefined); // false
```

🔹 **কোনটা ব্যবহার করা উচিত?**  
প্রোগ্রামে **`===` (strict equality)** ব্যবহার করাই ভালো, কারণ এটি টাইপ কনভার্সন করে না এবং ভুল তুলনার সম্ভাবনা কম থাকে।  

---

## **৩. `!=` vs `!==` (Loose vs Strict Inequality)**
একইভাবে, `!=` এবং `!==` অপারেটরের পার্থক্য **type coercion**-এর কারণে।  

```js
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
```

---

## **৪. বড় (`>`) ও ছোট (`<`) তুলনা**
এগুলো **সংখ্যা ও স্ট্রিং** উভয়ের মধ্যে কাজ করে, কিন্তু স্ট্রিং তুলনার সময় **ASCII মান** দেখে তুলনা করা হয়।  

```js
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log("apple" > "banana"); // false (a-এর ASCII মান b-এর চেয়ে ছোট)
```

---

## **৫. Null ও Undefined তুলনা**
JavaScript-এ **null ও undefined** নিয়ে তুলনা করার সময় সাবধান থাকতে হবে।  

```js
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true (বিস্ময়কর আচরণ!)
```
🔹 **ব্যাখ্যা:** `null >= 0` হলে true হয় কারণ JavaScript `null` কে `0` তে কনভার্ট করে।  

---

## **৬. NaN (Not-a-Number) তুলনা**
`NaN` (Not-a-Number) অন্য কোনো মানের সমান নয়, এমনকি নিজেকেও না!  

```js
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
```

---

## **৭. অদ্ভুত তুলনাগুলো**
JavaScript-এ কিছু অদ্ভুত তুলনা হতে পারে যা নতুনদের বিভ্রান্ত করতে পারে।  

```js
console.log([] == false); // true
console.log("" == false); // true
console.log(0 == false); // true
console.log("0" == false); // true
console.log([] == 0); // true
console.log([1,2] == "1,2"); // true
```
🔹 **কারণ:** JavaScript **type coercion** করে মান পরিবর্তন করে ফেলে।  

---

## **শেষ কথা**
1. **Loose equality (`==`) এর পরিবর্তে strict equality (`===`) ব্যবহার করুন।**  
2. **Type coercion সম্পর্কে ভালো ধারণা রাখুন।**  
3. **NaN, null, undefined তুলনায় সতর্ক থাকুন।**  
4. **JavaScript-এর অদ্ভুত আচরণগুলোর সাথে পরিচিত থাকুন।**  

---
### 🛠 **প্র্যাকটিস প্রশ্ন**
```js
console.log(null == 0); // ?
console.log(undefined == 0); // ?
console.log([] == ""); // ?
console.log([] == false); // ?
console.log("2" > "12"); // ?
console.log("apple" < "banana"); // ?
```
উত্তর নিজে চেষ্টা করুন! 😊