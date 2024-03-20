// **switch Case lekhar niyom 
const count  = 8 ;
switch( count){
                        case 0:
                              console.log('Zero');
                              break
                        case 1:
                              console.log("One");
                              break
                        case 2:
                              console.log('Tow');
                             break
                        case 3:
                              console.log('Three');
                              break
                        case 4:
                              console.log('For');
                              break
                        default:
                              console.log("Unknown Number ");

}

// ** Akadik sortho Lekhar jonno nimner switch case likthe hoy
const age = 991;

switch(true) {
                case( age >=15 && age <= 20):
                          console.log("Ami Vote Dibo");
                          break
                case( age >=20  && age <= 30):
                          console.log("Ami Prem Korbo");
                          break
                case( age >=30 && age <=40):
                          console.log("Ami Ami Ghurte jab0");
                          break
                case( age >= 40 && age <= 50):
                          console.log("Ami Biye Korbo");
                          break
                case( age >=50 && age <= 60):
                          console.log("Ami Chole Jabo");
                          break
                 default: 
                          console.log("Ami Kisu Bolbo na");         
}