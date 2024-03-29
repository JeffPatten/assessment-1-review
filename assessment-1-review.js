/* ----------------------------------------------DATA TYPES -------------------------------------------------------------------- */

let aString = ''
let aNumber = 1
let aBoolean = true
let anUndefined          // undefined because the variable hasn't a value assigned to it yet
let aNull = null
let anArray = []

// --------------------------------------------  VARIABLES  ------------------------------------------------------------------- //

let noValueAssigned

noValueAssigned = 'now it has a value'


let nameYouGiveTheVariable = 'some value'
const nameYouGiveTheVariable2 = 'some value'

// -------------------------------------------- CONDITIONALS(check if something is true or false) and FOR LOOPS ------------------------------------------------------------- //

let somethingIsTrue = true
let somethingIsFalse = false

// console.log(somethingIsTrue)



// if (somethingIsFalse) {
//     console.log('The value is false')
// } else if (somethingIsTrue) {
//     console.log("The value is true")
// } else {
//     console.log('This is the default code if no coditions are true')
// }

for (let i = 0; i < 6; i++) { // i = 0, i = 1, i = 2, 

    let someNumber = 3

    console.log(someNumber+10)



}

let newArr =['donuts', 'tacos', 'pizza']
for (let i = 0; i < newArr.length; i++) {

}

// ----------------------------------------------------- ARRAYS --------------------------------------------------------------------- //

let assessArr = ['donuts', 'tacos', 'pizza']

// accessing values in array => ex. arrayName[index/position]
assessArr[2] // read as assessArr at index 2 => gives us 'pizza'

// .length is a property of an array. It tells you how long the array is
assessArr.length // this will be 3

// push and unshift add items to the array.
// pop and shift remove items from the array.


                     /* .push() takes in any values that you want to add to the end of the array. ('more food') */

assessArr.push('salad')
// console.log(assessArr)


                     /* .pop() take off the last item in the array. It doesn't take in any arguments */

assessArr.pop()
// console.log(assessArr)


                     /* .unshift() takes in values you want added to the front of the array.  */

assessArr.unshift('asparagus')
// console.log(assessArr)


                     /* .shift() takes off the first item in the array. It doesn't take any arguments */

assessArr.shift()
// console.log(assessArr)


                     /* .slice() method: takes in 2 arguments (startingIndex, endingIndex) it includes the startingIndex but will not include the endingIndex. Makes a copy of these values but does not change the original array. */

let slicedArr = assessArr.slice(1, 2) // slicedArr will be => ['tacos']
// console.log('Sliced:', slicedArr)
// console.log('OriginalArr:', assessArr)


                     /* .splice() method: takes in 3 arguments (startingIndex, howManyItemsToRemove, anyValuesYouWantToPutIntoTheArray). Includes the item at the starting index. */

let splicedArr = assessArr.splice(0, 2, 'ice cream')
// console.log('Spliced:', splicedArr)
// console.log('OriginalArr:', assessArr)


                     /* loops with arrays: for loops and while loops */

for (let i = 0; i < assessArr.length; i++) {
    // conditionals - if, else if, else
    // more loops
    // variables
    // operations - 1 + 1
}

let i = 0
while(i < assessArr.length) {
    // your code here
    i++
}

  // percentages  number * 0.15 same as number * percentage => this gives us 15% of the number



  // ----------------------------------------------------- git commands and SDLC ---------------------------------------- //

  // https://ed.devmountain.com/materials/f46/lectures/code-intro/
        //   What is git? Version control system
        //   What is gitHub? your code repository in the cloud
        //   git push - pushes your local repository to your github repository
        //   git clone - takes the code from github and makes a local repository with that code

// https://ed.devmountain.com/materials/f46/lectures/software-development/
// SDLC - correct order and define each part or the process