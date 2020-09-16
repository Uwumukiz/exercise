// let x = 5;
// let sq = x*x;
// let nextsq = (x+1) * (x+1);
// console.log(nextsq);


function findNextSq(sq){
    let n= sq**2;
    let nextsq = (sq+1)**2;

    return [n,nextsq];
}

console.log(findNextSq(9));