function findNextSquare(sq) {
   
    var square = Math.sqrt(sq) + 1
    var nextSq = Math.sqrt(sq) + 1
    nextSq *= nextSq
    
   
    if (nextSq == Math.floor(square*square))
     
       return nextSq
    else
      return -1;
    
  }
  console.log(findNextSquare(9))