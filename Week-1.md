### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
variable, array, Boolean, number, string

  //Googled Answer
  Boolean.
  Null.
  Undefined.
  Number.
  String.
  Symbol (new in ECMAScript 6)

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

outside, function has been called, but has not passed a variable into it.


Then, past the code in your console and explain why you were right/wrong.

undefined.  I was correct about the function being called without the argument,
but the output was undefined.  


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  no clue...


  //Googled Answer
  JSON, or JavaScript Object Notation, is a minimal, readable format for
  structuring data. It is used primarily to transmit data between a server and
  web application, as an alternative to XML.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer

bundling a function together with a reference to its surrounding state.  you
create closure when you nest a function in another function and return or pass
it to another function.

  //Googled Answer
A closure is the combination of a function and the lexical environment within
which that function was declared.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= is assigning a value to something
== is checking for equality, but loosely.  Meaning 5 == "5" will be recognized
as being equal (coercion).  This is not assigning anything
=== strict equality.  Not only must the value be equal, but the data type must
be equal.  5 === "5" will return an error because one is a string and the other
an integer

  //Googled Answer
When using triple equals === in JavaScript, we are testing for strict equality.
This means both the type and the value we are comparing have to be the same.
When using double equals in JavaScript we are testing for loose equality.
Double equals also performs type coercion.
