### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer

  number (primitive), Boolean (primitive), string (primitive), undefined (primitive), null (primitive), symbol (primitive), object,

  //Googled Answer

  number (primitive), Boolean (primitive), string (primitive), undefined (primitive), null (primitive), symbol (primitive), object,

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

console will show "outside"

Then, paste the code in your console and explain why you were right/wrong.

In the console, 'undefined' is what is displayed. The reason why this is happening is because of JavaScript's variable hoisting. Globally, there is a 'text' variable defined, but inside the logIt function, JavaScript is looking ahead and seeing that there is 'text' variable that will be declared. The console.log line is returning 'undefined' because it knows that there is a variable called 'text' that exists, but doesn't know what the value is yet. Basically, the code becomes:
var text
console.log(text);
text = 'inside';

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

JSON stands for JavsScript Object Notation.

  //Googled Answer

JSON is a text format that is language independent, but uses conventions similar to languages such as JavaScript. It is particularly well suited for data-interchange and data is written as name/value pairs. It can store the data types number, Boolean, null, undefined, and string.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer

  A closure is good for protecting variables and making sure that certain functions are self-enclosed in terms of the things they need (i.e. not relying on variables in the global scope.) You can recognize closures when you see a function nested in another function, and the outer function returns the inner function, making it available to the scope that is one level outside of the outer function.

  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

  The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly. (http://javascriptissexy.com/understand-javascript-closures-with-ease/)

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer

  = : operator for assigning values to a variables
  ==: comparison operator, finds out if things are "equivalent" (i.e. same value but can be of different data type like 2 and "2")
  ===: comparison operator, decides if there is a strict equality between two things (i.e. both value and data type have to be the same)

  //Googled Answer

  JavaScript has both strict and type–converting comparisons. A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match. The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison. For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
