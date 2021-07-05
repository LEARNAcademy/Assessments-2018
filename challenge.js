// //Basic Challenge
// //Exercise 1
// var groceryList1 = ["apples", "carrots", "oatmeal"]
// //Use push to add "granola" to end of array
// groceryList1.push("granola")
// //log function to send to Terminal
// console.log(groceryList1);
//
// //Ex 2
// var groceryList2 = ["chips", "dip", "cookies"]
// //Add "soda" to end of original array
// groceryList2.push("soda")
// console.log(groceryList2)
//
// //Ex 3
// var numbers1 = [1, 2, 3, 4, 5]
// //Add 0 to beginning of array
// numbers1.unshift(0)
// console.log(numbers1);
//
// //Ex 4
// var numbers2 = [2, 4, 6, 8, 10]
// //Add 0 to beginning of array
// numbers2.unshift(0)
// console.log(numbers2);
//
// //Ex 5
// var numbers3 = [2, 13, 6, 8, 4, 2]
// //Write the code that finds the index of the first appearance of the number 2.
// console.log(numbers3.indexOf(2))
//
// //Ex 6
// //Write the code that finds the index of the last appearance of the number 2.
// console.log(numbers3.lastIndexOf(2))
//
// //Ex 7
// var chars = ["y", "a", "r", "r", "a"]
// //Write the code that brings all the letters in the chars array together into a
// //string.
// console.log(chars.join(""))
//
// //Ex 8
// //Write the code that reverses the order of the letters in the chars array and
// //saves it into a variable called charsReversed.
// var charsReversed = chars.reverse()
// console.log(charsReversed);
// console.log(charsReversed.join(""));
//
//Arrays Challenge
// var arr = [6, 7, 3 ,8, 18]
// max = 4
// arr.forEach(function(el, i){
//   if(el >= max){
//     console.log(el)
//   } else {
//      console.log(max)
//    }
//   }
// )
// var max = 0
// // function highestNumber (arr) {
// // var findHighestNumber = [1, 4, 2];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > findHighestNumber[i]) {
// //       return
// //     }
//   }
// }
// var arr = [1, 4, 2, 5];
// console.log(Math.max(...arr));

// var arr = ["Yup!", "Fuhgeddaboudit", "Maybe", "What would your mother do?",
// "What would an Australian do", "then do the opposite", "Your answer here"]

//Write a JavaScript function that will iterate from 0 to 15. For each
//iteration, it will check if the current number is odd or even, and display a
//message to the screen.
// for(let i = 0; i <= 15; i ++){ if(i % 2 === 0){
// //   console.log(i + " is even")
//     } else { console.log(i + " is odd")
//   }
// }


//Car Object Challenge Story 1
// Write a function that creates an object that
//represents a car with the following properties
// function car(newMake, newModelYear, newColor){
//   return{
//     year: newModelYear,
//     make: newMake,
//     color: newColor,
//   //write a function that combines these properties
//     carInfo: function() {return this.year +" "+this.make+" "+"in "+this.color}
//   }
// }

// Story 2
//Add a speed variable to the closure of the car object
// function car(newMake, newModelYear, newColor){
//   var speed = 10
//   return{
//     year: newModelYear,
//     make: newMake,
//     color: newColor,
//   //write a function that combines these properties
//     carInfo: function() {return this.year +" "+this.make+" "+"in "+this.color},
//     getSpeed: function() {return speed},
//     accelerate: function() {speed += 10},
//     brake: function() {speed -= 7},
//   }
// }
// //Story 3
function car(newMake, newModelYear, newColor){
  var speed = 10
  return{
    year: newModelYear,
    make: newMake,
    color: newColor,
  //write a function that combines these properties
    carInfo: function() {return this.year +" "+this.make+" "+"in "+this.color},
    getSpeed: function() {return speed},
    accelerate: function() {speed += 10},
    brake: function() {speed -= 7},
  }
}
var car1 = car("Honda", 2018, "Red")
function speedUp(car1){
  while(car1.getSpeed() <= 50){
    car1.accelerate()
  }
}
