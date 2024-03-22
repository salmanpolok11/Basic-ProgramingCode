// * Reduce Lekhar niyom => 
const numbers = [ 1 , 2, 3, 4, 5, 6, 7, 8, 9]
const result = numbers.reduce( ( pV , cV) => {
   return pV + cV
}, 0)
console.log(result);

// **

const  product = [
  {item: "shirt " , price: 200},
  {item: "Genji" , price: 300},
  {item: "Pant " , price: 900},
  {item: "Shoyetar " , price: 500},
  {item: "Panku " , price: 700},
  {item: "Vigo " , price: 400},
]
const res = product.reduce( ( pV ,   cV) =>  {
console.log(`previuse Value ${pV} and Current Value ${cV.price}` );
return pV + cV.price
} , 0)
console.log(res);