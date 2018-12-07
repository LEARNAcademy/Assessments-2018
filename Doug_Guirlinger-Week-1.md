### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  Primitive:
  Number, String, Array
  Non-Primitive:
  Object, Class

  //Googled Answer
  everything above, plus boolean, "null", undefined, and symbols

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
outside


Then, past the code in your console and explain why you were right/wrong.

undefined

I was wrong. No argument was entered.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer

JSON is like an object, but can only include data attributes. No methods.

  //Googled Answer
Javascript object notation. Used to efficiently share information between client and server.

#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
I don't know.

  //Googled Answer
A closure is an inner function that has access to variables in its own scope, variables in its parent function's scope, as well as global variables.

#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
= assigns a value
== compares more than one value of differing data types. For example, it will compare the string form of a number with another number of data type number
=== compares more than one value of the same data type. It will not compare values of differing data types.

  //Googled Answer

  same
