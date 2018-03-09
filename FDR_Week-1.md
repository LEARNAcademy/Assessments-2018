### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Objects, numeric, string, boolean
  primitives: numeric, string

  //Googled Answer
The latest ECMAScript standard defines seven data types:
Six data types that are primitives: Boolean, Null, Undefined, Number, String, Symbol (new in ECMAScript 6)
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

first Guess: outside
I was wrong because I thought it was asking what the value of text would be if I consolelog text. Instead it came up undefined because the 'inside' needs to be before the console.log for it to run through the method.


Then, past the code in your console and explain why you were right/wrong.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  JSON is JavaScript Object Notation
  JSON structures and formats objects

  //Googled Answer
  JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa).


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  A closure is something that is inside a function that can see multiple variables in different scenarios. It is good for calling global functions, and you can recognize it when it is in the scope of a function.


  //Googled Answer
  A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  = is meant to set a value. == is a comparison of two different values. === is a really strict comparison of two different values.


  //Googled Answer
  JavaScript has both strict and type-converting equality comparison. ... Two Boolean operands are strictly equal if both are true or both are false. Two objects are strictly equal if they refer to the same Object. Null and Undefined types are == (but not ===)
