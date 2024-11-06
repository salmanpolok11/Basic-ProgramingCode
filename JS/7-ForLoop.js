// ** ForLoop Lekhar Niyom => 
for( i=0; i < 20;  i = i +2){
  console.log(i);
}

// ** ForLoop Diye Bejor songsa ber korar Niyom => 
for( i=1; i < 20;  i +=2){
 console.log(i);
}

// ** Sting ar songe FORLoop lekhar niyom => 
const arr = [ "SAlman" , "Polok"  , " Ridoy" , "Alisa" , "Kamal"]
for( i=0; i < arr.length; i++){
   console.log(arr[i]);
}

// **ForLoop a Codition use Korar Niyom => 
for( i=0 ; i<10 ; i++){
  console.log(i);
   if( i ===5){
      console.log("5 peye gesi ");
      break
   }
}

// * For loop ar moddhe array declar
var nums = [ 14 , 45, 76, 43, 65, 32, 98, 56, 34, 78, 56, 108]
for( var i = 0 ; i < nums.length; i++){
   var num = nums[i]
   console.log(num);
}