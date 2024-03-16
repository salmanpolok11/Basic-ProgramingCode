// * Objecet lekhar niyom => 
const manDealits = {
  manName: "Salman Islam Polok"  ,
  manAge: 25,
  manHome: "Dhaka",
  manFav:  "Bangladesh",
  manFriends:  [ 'salman' , 'Polok' , 'Alisa']
}
console.log(manDealits);


// *Akta Object ar vitore aro onek object  rakha jay => 
const  friendsDeatils = {
  name: "Salman Islam Polok",
  age: 23,
  favM: "Apur Songsar",
   addresh: {
                  home: "Mithakpuku",
                  now: "dhaka",
                  districk: {
                         village: "Chitholi",
                         postCode:  5460
                  }
   }
}

console.log(friendsDeatils.addresh.districk.postCode);