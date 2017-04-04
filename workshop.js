function firstLetter(inputString) {
    if(inputString && isNaN(inputString)) {
        return (inputString[0])
        
    }
    else {
        return undefined
    }
}

function lastLetter(inputString) {
  if(inputString && isNaN(inputString)){
      return(inputString[inputString.length-1])
  }
  else {
      return undefined
  }
  
}

function letterAtPosition(inputString, position) {
    if(inputString && isNaN(inputString)){
        return (inputString[position])
    }
    else{
        return undefined
    }

}

function addTwoNumbers(num1, num2) {
    if(typeof num1=="number" && typeof num2 =="number"){
        return num1 + num2
    }
    else{
        return undefined
    }
}

function multiplyTwoNumbers(num1, num2) {
    if(typeof num1 =="number" && typeof num2 =="number"){
        return num1 * num2
    }
    else{
        return undefined
    }
}

function calculator(operation, num1, num2) {
       var choice = operation.toUpperCase();
       if(choice == "ADD" && num1 && num2){
           return num1 + num2
       }
       else if(choice =="SUB" && num1 && num2){
           return num1 - num2
           
       }
       else if(choice =="DIV" && num1 && num2){
           return num1 / num2
       }
       else if(choice =="MULT" && num1 && num2){
           return num1 * num2
       }
       else if(choice =="MODU" && num1 && num2){
           return num1 % num2
       }
      else{
          return undefined
      }
}

function repeatString(inputString, numRepetitions) {
    if(typeof inputString == "string" && numRepetitions > 0){
        return inputString.repeat(numRepetitions);
    }
    else if(typeof inputString =="string" &&numRepetitions <= 0){
        return "";
    }
    else{
        return undefined;
    }
}

function reverseString(inputString) {
    if(typeof inputString =="string" ){
        if(inputString ===""){
            return ""
        }
         else { return inputString.split("").reverse().join("");
         }
        
         }
}

function longestWord(inputString) {
if(inputString === ""){
    return ""
}
else if(typeof inputString =="string"){
    var array = inputString.split(" ")
     
     var word="";
    for(var i = 0; i < array.length; i++){
        if(array[i].length > word.length){
            word = array[i]
        }
    }
    return word
}
}

function capitalize(inputString) {
    if(inputString ===""){
        return ""
    }
    var array = inputString.toLowerCase().split(" ");
    for( var i =0; i<array.length;i++){
        var letters = array[i].split("")
        letters[0] =letters[0].toUpperCase();
        array[i]=letters.join("")
    
    }
    return array.join(" ")
 
}

function sumOfNumbers(arrayOfNumbers) {
   var sum = 0;
    if (typeof arrayOfNumbers != "object"){
        return    
    }
    for (var j= 0; j < arrayOfNumbers.length; j++) {
        if (typeof arrayOfNumbers[j] !== "number") {
            return 
        }
    }     
    for (var i= 0; i < arrayOfNumbers.length; i++) {
        sum = sum + arrayOfNumbers[i]
    }
    return sum
}


function uniqueElements(array1, array2) {
  
var arrayTemp = [];
    
    if (typeof array1 != "object" && typeof array2 != "object") {
        return;
    }
    
    for (var i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) < 0) {
            arrayTemp.push(array1[i])
        }
    }
    
    for (var j = 0; j < array2.length; j++) {
        if (array1.indexOf(array2[j]) < 0) {
            arrayTemp.push(array2[j])
        }
    }
    return arrayTemp
}

function isPalindrome(inputString) {
   inputString = inputString.replace(/[^a-zA-Z ]/g, "").split(" ").join("").toLowerCase()
     console.log(inputString);
    var L = inputString.length;
    for (var i = 0; i < L / 2; i++) {
        if (inputString.charAt(i) !== inputString.charAt(L - 1 - i)) {
            return false;
        }
    }
    return true;

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};