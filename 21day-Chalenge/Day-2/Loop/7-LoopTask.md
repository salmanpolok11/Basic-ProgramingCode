Loop Method - 1
Arrar ar man ke ak ka kore dekhanor jonno for Of loop use kora hoy => 
```js
const heros= [ "Salman" , "Polok" , "Islam", "Onu" , "Topon"] 
for( const hero of heros ){
   console.log(hero);
}
   ```

 Loop Medthod - 2  
সরাসরি for...of লুপটি JavaScript অবজেক্টের উপর চালানো যায় না। কারণ, অবজেক্টগুলো ডিফল্টভাবে ইটারেবল নয়।
তবে, আমরা Object.keys(), Object.values(), অথবা Object.entries() পদ্ধতি ব্যবহার করে অবজেক্টকে একটি ইটারেবল অ্যারেতে রূপান্তর করতে পারি এবং তারপরে for...of লুপ চালাতে পারি।

```js
const hero = {name: "salman",age: 30, study: "BA", Home: "Rangpur"}
for( const key of Object.keys(hero)){
   console.log(key);
}
```