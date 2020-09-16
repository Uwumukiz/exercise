function minimum(array){
    let minNumber=array[0];
    for(i=0; i<array.length; i++){
        if(minNumber>array[i]){
            minNumber = array[i];
        }
    }
return minNumber;
}
console.log(minimum([-3,4,2,7,78]));

function maximum(arr){
    let maxNumber = arr[0];
    for(i=0; i<arr.length; i++){
        if(arr[i]>maxNumber){
            maxNumber= arr[i];
        }
    }
    return maxNumber;
}
console.log(maximum([-3,4,2,7,78]));

function sumOfFirstTwoNumbers(numbers){
    let firstNum = Math.min(...numbers);
    let newArray= numbers.filter(number => number != firstNum);
    let secondNum = Math.min(...newArray);
    
    return firstNum + secondNum;
}
console.log(sumOfFirstTwoNumbers([4,2,7,78]));