
// [1,5,6,3,10,20],10, result=4
// console the index of element in array


function findIndexOfElement(arr, element){
    let index = 0 ;
    for(let i=0; i<arr.length; i++){
        if(element===arr[i]){
           return index;
    } else {
        index +=1;
    }

}
return arr[i];
}
console.log(findIndexOfElement([2,4,5,7,1,8,], 1));
