### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives.

  //Your Answer
  <!--
  - boolean (primitive)
  - number (primitive)
  - string (primitive)
  - null (primitive)
  - undefined (primitive)
  - object -->


  //Googled Answer
  <!--
  - boolean
  - null
  - undefined
  - number
  - string
  - symbol
  - object -->


#### 2. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: This will log "undefined" because when Javascript runs code.


Then, past the code in your console and explain why you were right/wrong.
I was right because when javascript is run, it reads for all variables and makes space for all variables in its memory. Because text is redeclared in the function logIt(), javascript immediately stores the variable "text" without any value in its memory before the console.log() line. So, when it is logged it appears as "undefined" because the variable is hoisted before its assignment.


#### 3. What is JSON? How does it relate to javascript objects?

  //Your Answer
  I'm not particularly certain what JSON stands for, however I do understand that JSON deals with object-type data in javascript. JSON refers to programming with the use of javascript objects and its methods.

  //Googled Answer
  JSON stands for JavaScript Object Notation
  JSON is lightweight data interchange format
  JSON is language independent *
  JSON is "self-describing" and easy to understand

* The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.


#### 4. Describe a closure, what is it good for and how do you recognize one?

  //Your Answer
  A closure refers to the concept that the scope of a function is set at its declaration. It also refers to the fact that one functions is enclosing another function.

  Closures are helpful when you are writing functions that are self-sustaining and do not depend on global variables. This is especially helpful when you are working on a large project and do not want to have any variables declared on the global scope to ensure that you are not disrupting the other code in your program.

  You can recognize a closure when you see a function contained within another function. Additionally, you can recognize a closure by looking at the return and identifying whether it is returning the text of the function within the larger function.

  //Googled Answer
  A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

  To use a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function.

  The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

  In JavaScript, closures are the primary mechanism used to enable data privacy. When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function. You can’t get at the data from an outside scope except through the object’s privileged methods. In JavaScript, any exposed method defined within the closure scope is privileged.


#### 5. What's the difference between =, ==, and === in JavaScript?

  //Your Answer
  One equal sign refers to assignment. For example, if you would like to declare the string variable "8", you would use one equal sign. (var string = "8")

  Two equal signs is a comparison statement that is determining whether the value of the two pieces of data are equal. For example, to find whether the value of the number 8 and the the string "8" are equal, you would type two equal signs in the middle and it would return the boolean value 'true'. (return "8" == 8; --> true)

  Three equal signs is a comparison statement to determine whether the value and type of two pieces of data are equal. For example, if you were to compare the data-type string "8" with the data-type number 8, you would return false because they have the same value but not the same data type. (return "8" === 8; --> false)

  //Googled Answer
  By using = you assign a value to something.
  By using == you check if something is equal to something else. This is not strict
  By using === you check if something is equal to something else. This is also strict.

  What strict does, in case it wasn't clear there, is that it checks not only the equality of the two values, it compares the types of the two values too. Using == will try and convert one side of the expression to be the same type as the other. For example, boolean and integer. The boolean value for true is 1, therefore does 1 equal 1? Yes, true. When using strict however, it does not try and convert before doing the comparison, it checks if true equals 1, which is doesn't as they are two different data types, and returns false.
