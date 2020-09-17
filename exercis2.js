let food1 = ['Noodle', 'Pasta', 'Ice-cream', 'Pizza', 3];
let food2 = ['Fries', 'Ice-cream', 'Pizza', 3];
// compare the arrays and return the element similar in two arrays
for(let i=0; i<food1.length;i++){
    for(let j=0; j<food2.length;j++){
        if(food1[i]===food2[j]){
            console.log(food1[i]);


        }
    }
}