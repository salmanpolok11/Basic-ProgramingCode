// **condition
const salary = 200 ;
const isBCS =  false ;
if( salary >= 200 && isBCS == true){
    console.log('su patro ');
}
else {
     console.log( 'Gu Patro');
}


// *  MUltipaqal Condition 
const dam = 5000 ;
if( dam >= 5000){
   const discount = dam * 10 / 100;
   const payAmount = dam - discount;
   console.log(payAmount);
}

// * More 
const price = 500;
const age = 60 ;

if (age <= 12) {
   console.log(" You Can eat  for free");
}
else if ( age >= 60){
   const discount =  price * 50 /100 ;
   const payAmount = price - discount;
    console.log(payAmount);
}
else{
   console.log(price);
}

// * Gradae 
const result = 80 ;
if( result >= 80){
   console.log("A+");
}
else if( result >= 70){
   console.log("A");
}
else if( result >= 60){
   console.log("A-");
}
else if( result >= 50){
   console.log("B");
}
else if( result >= 40){
   console.log("C");
}
else if( result >= 33){
   console.log("C");
}
else if( result < 33){
   console.log("F");
}