"use strict";

//First Function
let isOdd = (myNumber) => {
  console.log(myNumber + ": " + (myNumber % 2 === 1));
};

isOdd(17);

//Second function
let reverseString = (myString) => {
  let myReverseString = "";
  for (let i = myString.length - 1; i >= 0; i--) {
    myReverseString += myString[i];
  }
  console.log(myString + ": " + myReverseString.toLowerCase());
};

reverseString("Azerbaijan");

//Third function
let sumArray = (myArray) => {
  let mySum = 0;
  for (let i = 0; i < myArray.length; i++) {
    mySum += myArray[i];
  }
  console.log("[" + myArray + "]" + ": " + mySum);
};

sumArray([1, 2, 3, 4, 5]);

//Fourth function
let isPalindrome = (yourString) => {
  let newString = "";
  for (let i = yourString.length - 1; i >= 0; i--) {
    newString += yourString[i];
  }
  console.log(yourString + ": " + (newString === yourString));
};

isPalindrome("tenet");
isPalindrome("tesla");

//Fifth function
let averageArray = (yourArray) => {
  let yourSum = 0;
  for (let i = 0; i < yourArray.length; i++) {
    yourSum += yourArray[i];
  }
  let yourAverage = yourSum / yourArray.length;
  console.log("[" + yourArray + "]" + ": " + yourAverage);
};

averageArray([1, 2, 3, 4, 5]);
