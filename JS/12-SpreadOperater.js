// *Spread Operater Lekher Niyom => 
const arr1 = [ 10 , 20 , 30 , 40]
const arr2 = [ ...arr1 , 50 , 60 , 70 , 80]
console.log(arr2);


// * Spread Operater Diye jog korar niyom => 
const arr4 = [ 10 , 20 , 30 , 40]
function sum ( num1 , num2 , num3 , num4){
     return num1 + num2 + num3 + num4
}
console.log(sum(...arr4));