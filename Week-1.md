### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  string
  boolean
  numbers
  symbols
  null
  undefined


  //Googled Answer
  Six data types that are primitives:
  Boolean
  Null
  Undefined
  Number
  String
  Symbol (new in ECMAScript 6)

  and Object

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
inside

Then, past the code in your console and explain why you were right/wrong.

console gives undefined. I was wrong because the console.log() is before var text and not after. if it were after it but still in the function then it would return inside. if the log was outsie the function then it would return outside.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
JSON is a package that helps you manage your files to allow them to interact with a server to create a webpage

  //Googled Answer
  JSON stands for JavaScript Object Notation

  JSON is a lightweight format for storing and transporting data

  JSON is often used when data is sent from a server to a web page

  JSON is "self-describing" and easy to understand

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
 a function inside a function that has access to its own scope, the outter functions scope and the global scope.

  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

  The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= would allow for comparison of data types 0 = null
== has type conversion so 1 = "1"
=== is strict same data type that is exactly the same

//Googled Answer
In one word, main difference between "==" and "===" operator is that formerly compares variable by making type correction e.g. if you compare a number with a string with numeric literal, == allows that, but === doesn't allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type "===" return false, while "==" return true.
