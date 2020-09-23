function longestWord(sentence){
    let sentenceSplit = sentence.split(" ")
    let longestWords ='';
    for(let i=0; i<sentenceSplit.length; i++){
        if(sentenceSplit[i].length > longestWords.length){
            longestWords =sentenceSplit[i];
        }
       
    }
    return longestWords;
}

console.log(longestWord("The bigest animal in the world is aquatic"));
