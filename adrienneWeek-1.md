### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Adrienne:
  //primitives:
  //string
  //number
  //boolean
  //undefined
  //null



  // Google:
  // symbol is primitive
  // and object is not primitive


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';

};

logIt();


```

first Guess:
 // Guess: Oopsie, I already ran it.

Then, paste the code in your console and explain why you were right/wrong.
// Explanation: I don't really understand, but I would guess something like... because the var text is redefined again with var, instead of just assigning a new value to the already present variable, it gets confused and comes back undefined. I think it also might involve hoisting, which I don't understand yet.


#### 3. What is JSON? How does it relate to javascript objects?

  // Adrienne: I don't even vaguely remember


  // Google: Javascript Object Notation; JSON is a syntax for passing around objects that contain name/value pairs, arrays and other objects.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Adrienne: A closure allows you to save a value that a function puts out,  and allows the function to alter the value as you run the function multiple times.  It is recognizable as a function expression (assigned to a variable) with a nested function inside.


  //Google: A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are the primary mechanism used to enable data privacy. A closure can be recognized by a function nested within another function, which is then returned or passed to another function.


#### 5. What's the difference between =, ==, and === in JavaScript?

  // Adrienne:
  // = defines a value
  // == says it is equal in value, but does not look at types of data
  // === is equal in value and in data type

  // Google:
  // Essentially the above, but looks like == converts the data to the same type rather than just ignoring it.
