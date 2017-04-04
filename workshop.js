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

}

function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

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