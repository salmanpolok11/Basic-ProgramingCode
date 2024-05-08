// * Duplicate data remove korar niyom => 
const friendList = [ "Salman" , "Islam" , "Polok", "Salman" , "Polok" , "Islam" , "Alisa"]
function removeDup () {
          let newFriendlist = []
          for( i=0 ;  i < friendList.length;  i++){
               const element = friendList[i]
              if(newFriendlist.includes(element) === false){
                 newFriendlist.push(element)
              }
          }
          return newFriendlist;
}
const result = removeDup(friendList);
console.log(result);

