// * Continue Lekhar Niyom =>
  let nums = [ 14 , 34, 56, 76, 87, 90, 23, 50, 33, 29 , 43]
  for( i=0; i < nums.length; i++){
     let num = nums[i]
    if( num < 70){
       continue;
    }
    console.log(num);
}

// * Problem=> 

   let books = [ 150, 120 , 300, 250 , 100 , 80 , 140 , 500 , 400, 50 , 100 , 200, 201]
   for( i=0; i < books.length; i++){
      let book = books[i]
      if( book > 200){
        continue
      }
      console.log(book);
   }