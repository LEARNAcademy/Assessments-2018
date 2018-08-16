### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Strings, Numbers, null/undefined,symbol,boolean  Object

  //Googled Answer
Strings, numbers, null, undefined, symbol, boolean objects

#### 2. Look at this Javascript and try to predict, what will the browser's console show?

```javascript
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();
```

first Guess:
Undefined. Text is loaded into memory but it doesn't get defined
The function is in local scope, can't be called outside  

Then, past the code in your console and explain why you were right/wrong.
UNDEFINED. function is being called outside of local scope

#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
Allows you to use regular text/language to work with data using key:value pairs and arrays

  //Googled Answer
JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. ... It is based on a subset of the JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
You use a closure to end a function so it can be used in other functions. You would recognize it if you saw a return located after the } of the function inside the function but before the closing } tag on the original function  

  //Googled Answer
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= is an assignment for a variable of funcion
== compares if they are the same as strings eg  2 == '2'
=== is a comparison operator for use in if else statement for if something is equal to something
ex= if (x === 'y')    ex= if (newVariable === 1)

  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.
