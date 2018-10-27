### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Data Types: Numbers, Strings, Booleans, Undefined << All primitives.

  //Googled Answer
  Numbers, Strings, Booleans, Undefined, Null, Object, and Symbol.


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

The variable text is declared at the top of the code. The function is called, then the console.log is ran, the console log finds the declared variable: 'outside' and executes before it finds var text = "inside". If the console.log was after the var text = 'inside', it would display, "inside".


Then, past the code in your console and explain why you were right/wrong.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

  JSON stands for JavaScript Object Notation. Stores information for a React app or project.


  //Googled Answer
  JSON: JavaScript Object Notation.
  JSON is a syntax for storing and exchanging data.
  JSON is text, written with JavaScript object notation.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
	Typically a function within curly brackets that has access to outer functions, variables in the lexical scope.

  //Googled Answer

  A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= is an assignment operator
== Compares. Will
=== compares strictly. This means in javascript it will compare the data type as well.

  //Googled Answer
