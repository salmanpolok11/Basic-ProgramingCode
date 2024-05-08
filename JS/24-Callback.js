// * Callback lekhar niyom => 
const fristSection = (a, b, Callback) => {
  setTimeout(() => {
    console.log(a + b);
    Callback()
  }, 2000)
}
const secondSection = () => {
  console.log("Second-2");
}
fristSection(6, 5, secondSection)
