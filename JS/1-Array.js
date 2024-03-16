// **Array lekhar niyom niche dekhano holo => 
const friendAge = [ 20 , 25 , 18 , 22 , 21 , 30 , 40, 63, 52 , 99]
const friendName  = ["Salman"  , "Polok" , "Ridoy"  ,"Alisa" ,"Mokbul"]
console.log(friendAge , friendName);

// **Array Ar moddhe koyta 'data' ase seta check korar jonnoo [ .length] likthe hoy =>
const booklist = [ 12, 34, 54 , 32 , 87 , 99, 109]
console.log(booklist.length);

// **Array ar moddhe kono data kono position / index bosse seta ber korar jonno [ indexOff]() ] likthe hoy => 
const bonduAge = [ 21 , 32, 43, 26 , 52 , 87, 23,]
console.log(bonduAge.indexOf(32));


// ** Index number diye data ber kora jay => 
const pen = [ 5 , 10 , 20 , 30 , 40 , 90 , 20]
const indexElement = pen[4]
console.log(indexElement);


// ** Array Number Update Korar Niyom => 
const  pencileList = [ 12 , 34 , 76 , 33 , 40 ,]
console.log(pencileList);
const update  = pencileList[0] = 33;
console.log(pencileList);
console.log(update);


//**Array ar sese kono data dhukano jay "push" kore => 
const gagedName = [ 'Mobaile' , "Headphone" , "Charger" ,  " Light"]
console.log(gagedName);

gagedName.push('Laptop')
console.log(gagedName);


//**Array ar sese kono data ber kora jay "pop()" kore => 
const gajedName = [ 'Mobaile' , "Headphone" , "Charger" ,  " Light"]
console.log(gajedName);

gajedName.pop()
gajedName.pop()
gajedName.pop()
console.log(gajedName);

//**Array ar prothome kono data add korte hole "unshift()" kore => 
const gName = [ 'Mobaile' , "Headphone" , "Charger" ,  " Light"]
console.log(gName);

gName.unshift('Laptop')
console.log(gName);


//**Array ar prothome kono data remove korte hole "shift()"  use korte hoy => 
const rName = [ 'Mobaile' , "Headphone" , "Charger" ,  " Light"]
console.log(rName);

rName.shift()
console.log(rName);