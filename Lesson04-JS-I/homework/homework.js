//In these first 6 questions, replace `null` with the answer

//create a string variable, it can contain anything
const newString = "anything" ;

//create a number variable, it an be any number
const newNum = 1 ;

//create a boolean variable
const newBool = false ;

//solve the following math problem
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will compete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names

function returnString(str) {
  return str;
}

function add(x, y) {
  const addition = a + b;
  return addition;
}

function subtract(x, y) {
  const subtraction = x - y;
  return subtraction;
}

function multiply(x, y) {
  const multiply = x * y;
  return multiply;
}

function divide(x, y) {
  const division = x / y;
  return division;
}

function areEqual(x, y) {
  if (x === y) {
   return true;
}
return false;
}

function areSameLength(str1, str2) {
    if (areSameLength.length === 4){
      return true;
    }
    return false;
  }
  

function lessThanNinety(num) {
  if (lessThanNinety < 90){
    return true;
  }
  return false;
}

function greaterThanFifty(num) {
 if (greaterThanFifty > 50){
   return true;
 }
 return false;
}

function getRemainder(x, y) {
  // return the remainder from dividing x by y
  // code here
}

function isEven(num) {
  // return true if num is even
  // otherwise return false
  // code here
}

function isOdd(num) {
  // return true if num is odd
  // otherwise return false
  // code here
}

function square(num) {
  // square num and return the new value
  // hint: NOT square root!
  // code here
}

function cube(num) {
  // cube num and return the new value
  // code here
}

function raiseToPower(num, exponent) {
  // raise num to whatever power is passed in as exponent
  // code here
}

function roundNumber(num) {
  // round num and return it
  // code here
}

function roundUp(num) {
  // round num up and return it
  // code here
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
}

function getGreeting(name) {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
}

// The next three questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  // return the area of the rectangle by using length and width
  // code here
}

function getTriangleArea(base, height) {
  // return the area of the triangle by using base and height
  // code here
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
