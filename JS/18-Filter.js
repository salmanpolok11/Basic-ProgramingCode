// * Onekgulu data ar moddhe nirdisto data khuje paoyar jonnno "filter" use korte hoy
const  person =  [ 
  {name: "salman" ,  age: 20 , profesootion: "actor"},
  {name: "Polok" ,  age: 27 , profesootion: "poet"},
  {name: "Alisa" ,  age: 24 , profesootion: "Hiroin"},
  {name: "Monju" ,  age: 50 , profesootion: "Bebsahi"},
  {name: "Balam" ,  age: 34 , profesootion: "Singar"},
  {name: "Tahasan" ,  age: 65 , profesootion: "Singar"},
  {name: "Babu" ,  age: 34 , profesootion: "actor"},
  {name: "Daku" ,  age: 23 , profesootion: "Hiroin"}
]
const signgleName = person.filter( (p) => p.age >= 27)
console.log(signgleName);