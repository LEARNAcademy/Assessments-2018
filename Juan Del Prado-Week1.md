### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  //Your Answer: Numbers, Boolean, Objects

  //Googled Answer: Boolean, Null, Undefined, Number, String, Symbol (new in ECMAScript 6)


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

outside, inside


Then, past the code in your console and explain why you were right/wrong: 

Undefined. I was wrong because I did not consider variable "hoisting".

#### 3. What is JSON? How does it relate to javascript objects?
  //Your Answer:


 JavaScript Object something.
  
  
  //Googled Answer:


-Java Script Object Notation 

-JSON is a syntax for storing and exchanging data.

-JSON is text, written with JavaScript object notation.




#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer:

A method/way to close a function. 
  
  //Googled Answer:

JavaScript variables can belong to the local or global scope.

Global variables can be made local (private) with closures.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer:

Refer, compare, equal to. 
  
  //Googled Answer:

These are comparison operators:

=  	assign
==	equal to
===	equal value and equal type

