// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = soccer, baseball
// total = soccer, baseball, football, swimming


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
function longestString(strings){
   var longest = strings[0];
   for(var i = 0; i < strings.length; i++){
       if(longest.length < strings[i].length){
           longest = strings[i];
    }
}
return longest;
}

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
 function smallestNumber(numbers){
   var smallNum = numbers[0];
   for(var l = 0; l < numbers.length; l++){
     if(smallNum < numbers[l]){
       smallNum = numbers[l];
     }
     return smallNum;
   }
   r
 }



console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:

function getEvens(numbers){
    var newNumbers = [];
    for(var k = 0; k < numbers.length; k++){
        if(numbers[k] % 2 === 0){
            newNumbers.push(numbers[k]);
        }

    }
    return newNumbers;
}


console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});

// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:
function arrayReverser(numbers){
    var reverseNum = [];
    for(var i = numbers.length; i > 0; i--){
         reverseNum.push(numbers[i]);
    }
    return reverseNum;
  
}


console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:
function sumArrayOfNumbers(numbers){
     var sum = 0;
     for(var l = 0; l < numbers.length; l++){
        sum = sum + numbers[l];
    }
    return sum;
}

console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:

function numbersOver10(numbers){
    var overTen = [];
    for(var t = 0; t < numbers.length; t++){
        if(numbers[t] > 10){
            overTen.push(numbers[t]);
        }
    }
    return overTen;
}


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:
function numbersOverX(numbers, value){
    var overX = [];
    for(var t = 0; t < numbers.length; t++){
        if(numbers[t] > value){
            overX.push(numbers[t]);

        }
    }
    return overX;
}



console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays(numbersTwo, number){
    for(var i = 0; i < numbersTwo.length; i++){
     var newNumbers = numbers;
     newNumbers = newNumbers.push(numbersTwo[i]);
    }
    return newNumbers;
}


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = ['Will', 'JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = 'Dan'

var instructorTwo = instructors[0][1];
// instructorTwo = 'JavaScript'

var instructorThree = instructors[2][0];
// instructorThree = 'Brit'
