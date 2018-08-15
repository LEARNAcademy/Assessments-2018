### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Numbers
  strings
  Boolean(primitive)
  undefined(primitive)
  NaN(primitive)
  true/false


  //Googled Answer
  Boolean.
  Null.
  Undefined.
  Number.
  String.
  Symbol.
  Object.
  "all primitive except 'Object'"

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

'outside inside'

Then, past the code in your console and explain why you were right/wrong.

console.log(text) runs whatever is above it and since there is a 'text' variable that is being declared underneath console.log(text), it thinks 'text' is undefined.

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
JavaScript Object Notation. JSON is the actual text that translates to a JavaScript object.

  //Googled Answer

  When exchanging data between a browser and a server, the data can only be text.

  JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

  We can also convert any JSON received from the server into JavaScript objects.

  This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
A closure is what you contain a function within a function.

  //Googled Answer

A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= Assigns (example: assigning a value to a variable (var a = true))
== equates (Example "5" == 5 (true))
=== equal to

  //Googled Answer

  Main difference between "==" and "===" operator is that formerly compares variable by making type correction e.g. if you compare a number with a string with numeric literal, == allows that, but === doesn't allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type "===" return false, while "==" return true.
